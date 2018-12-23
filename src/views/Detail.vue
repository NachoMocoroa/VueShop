<template>
  <div class="wrapper">
    <div class="detail-image">
      <img :src="product.image" />
    </div>
    <div class="detail-info">
      <h1>{{ product.text }}</h1>
      <div class="price">{{ product.price }}</div>
      <div class="pickers">
        <dropdown-shop
        :label="'Size'"
        :id="'dropSize'"
        :name="'dropSize'"
        :options="sizes"></dropdown-shop>
        <dropdown-shop
        :label="'Quantity'"
        :id="'dropQuantity'"
        :name="'dropQuantity'"
        :options="quantities"></dropdown-shop>
      </div>
      <div class="description">
        <h2>{{ constantDetail.DESCRIPTION }}</h2>
        <p>{{ product.description }}</p>
        <p>{{ constantDetail.FEATURES }}:</p>
        <ul>
          <li
          v-for="(feature, index) in product.features"
          :key="index">
            {{ feature }}
          </li>
        </ul>
      </div>
      <div>
        <button-shop
        @click.native="showPopUp">
          {{ constantAddToCartButton }}
        </button-shop>
      </div>
    </div>
  <transition name="modal">
    <purchase-pop-up
    v-if="isVisiblePopUp"></purchase-pop-up>
  </transition>
  </div>
</template>

<script>
  import ButtonShop from '../components/ButtonShop.vue';
  import DropdownShop from '../components/DropdownShop.vue';
  import PurchasePopUp from '../components/PurchasePopUp.vue';
  import EventBus from '../event-bus';
  import { utils } from "../store/utils";
  import { Constants } from '../mocks/constants.js';

  export default {
    name: 'Detail',
    components: {
      ButtonShop,
      DropdownShop,
      PurchasePopUp
    },
    data () {
      return {
        sizes: null,
        quantities: null,
        info: null,
        product: null,
        isVisiblePopUp: false,
        sizeSelected: '',
        quantitySelected: 0,
        constantAddToCartButton: null,
        constantDetail: null
      }
    },
    created() {
      this.constantAddToCartButton = Constants.shared.buttons.ADD_TO_CART;
      this.constantDetail = Constants.shared.literals.detail;
      this.sizes = this.$store.getters.getSizes;
      this.quantities = this.$store.getters.getQuantities;
      this.info = this.$store.getters.getProducts;
      this.product = this.filterProduct();
      this.setEventBus();
      this.initDrops();
    },
    beforeDestroy() {
      this.resetEventBus();
    },
    methods: {
      initDrops() {
        this.filterDrops({dropName: "dropSize", option: 'XS', index: 0});
        this.filterDrops({dropName: "dropQuantity", option: 1, index: 0});
      },
      setEventBus() {
        EventBus.$on('closePopUp', () => { this.closePopUp(); });
        EventBus.$on('setValue', (params) => { this.filterDrops(params); });
      },
      resetEventBus() {
        EventBus.$off('closePopUp');
        EventBus.$off('setValue');
      },
      filterDrops(...params) {
        const dropSizeName = 'dropSize';
        const dropQuantityName = 'dropQuantity';
        const dropName = params[0].dropName;
        const dropOption = params[0].option;

        if (dropName === dropSizeName) {
          this.sizeSelected = dropOption;
        } else if (dropName === dropQuantityName) {
          this.quantitySelected = dropOption;
        } else {
          console.log('Not registered - params: ', params);
        }
      },
      filterId(param) {
        let stringText = param;
        stringText = stringText.replace('detail', '');
        stringText = stringText.replace(this.$route.params.folder, '');
        stringText = stringText.replace(/[\/]/g, '');
        return stringText;
      },
      filterProduct() {
        for (let i = 0; i < this.info.length; i++) {
          const element = this.info[i];
          if (element.clicked === this.$route.params.folder) {
            for (let j = 0; j < element.clothes.length; j++) {
             const filteredTextId = this.filterId(element.clothes[j].urlid);
              if (filteredTextId === this.$route.params.id) {
                return element.clothes[j];
              }
            }
          }
        }
      },
      goToUrl(param) {
        this.$router.push('/' + param);
      },
      increaseProductQuantity(param) {
        let aggregate = parseInt(this.$store.state.cart.items[param].quantity, 10) + this.quantitySelected;
        const payload = {
          index: param,
          quantity: aggregate
        }
        this.$store.dispatch('setItemQuantity', payload);
      },
      registerNewProduct() {
        const payload = {
          item: this.product,
          size: this.sizeSelected,
          quantity: this.quantitySelected,
          totalprice: this.calculateTotalPrice()
        }
        this.addToCart(payload);
      },
      showPopUp() {
        this.isVisiblePopUp = true;
        this.filterBought();
      },
      filterBought() {
        const check = {
          itemid: this.product.id,
          itemsize: this.sizeSelected
        }
        let itemExists = utils.getItemDuplicated(this.$store.state, check);
        itemExists === -1 ? this.registerNewProduct() : this.increaseProductQuantity(itemExists);
      },
      closePopUp() {
        this.isVisiblePopUp = false;
      },
      addToCart(product) {
        this.$store.dispatch('addToCart', product);
      },
      calculateTotalPrice() {
        const floatedPrice = this.quantitySelected * parseFloat(utils.parsePrice(this.product.price));
        return floatedPrice.toFixed(2);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    height: 100%;
    display: flex;
    -ms-flex-direction: row;
    -webkit-flex-direction: row;
    flex-direction: row;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    .detail-image {
      position: relative;
      margin: 64px 32px;
      width: 50%;
      max-width: calc(var(--base-width) * 2);
      img {
        width: 100%;
        max-width: 100%;
        max-height: 100%;
        margin: 0 auto;
      }
    }
    .detail-info {
      margin: 64px 32px;
      width: 50%;
      max-width: calc(var(--base-width) + 100);
      text-align: left;
      h1 {
        font-size: var(--font-title);
        font-weight: var(--intermediate-weight);
        line-height: 28px;
        margin: 0;
      }
      .price {
        margin: 16px 0 40px;
        font-size: var(--font-subtitle);
        color: var(--grey-light);
      }
      .pickers {
        display: flex;
        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
        border-top: 1px solid #ccc;
      }
      .description {
        margin: 32px 0;
        color: var(--grey-light);
        font-size: var(--font-normal);
        h2 {
          margin: 16px 0;
          font-size: var(--font-normal)!important;
          color: var(--grey-dark);
        }
        p {
          margin: 0 0 20px 0;
        }
        ul {
          display: block;
          list-style-type: disc;
          margin: 0;
          padding: 0 0 0 50px;
        }
      }
    }
  }

  .modal-enter-active, .modal-leave-active {
    transition: .3s;
    transform: translate(0%, 0%);
  }
  .modal-enter, .modal-leave-to  {
    transition: .3s;
    transform: translate(100%, 0%);
  }

  @media (max-width: 768px) {
    .wrapper {
      display: block;
      .detail-image {
        width: 100%;
        margin: auto;
      }
      .detail-info {
        width: 90%;
        margin: 0px auto;
        max-width: 600px;
        padding: 0px 24px;
      }
    }
  }
</style>
