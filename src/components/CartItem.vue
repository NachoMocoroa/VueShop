<template>
  <div class="cart-item-wrapper">
    <a @click="goToUrl(itemUrlid)"
    :title="itemText">
      <img :alt="itemText" :src="itemImage">
    </a>
    <div class="flex">
      <div class="name">
        <a @click="goToUrl(itemUrlid)">
          {{ itemText }}
        </a>
      </div>
      <div class="detail">
        <div class="quantity">
          <div class="shop-select">
            <label prefix="">{{ constantCommons.QTY }}:</label>
            <select
            ref="quantitySelect"
            aria-label="Change quantity"
            @change="calculatePrice">
              <option
              v-for="n in quantities"
              :key="n"
              :value="n">
                {{ n }}
              </option>
            </select>
            <span class="select-arrow"></span>
          </div>
        </div>
        <div class="size">
          {{ constantCommons.SIZE }}: <span>{{ itemSize }}</span>
        </div>
        <div class="price">${{ totalBudget }}</div>
        <span class="delete-button"
        icon="close"
        :aria-label="`Delete item ${ itemText }`"
        role="button"
        tabindex="0"
        aria-disabled="false"
        @click="deleteItem()">
          {{ constantCloseButton }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from '../event-bus';
import { utils } from "../store/utils";
import { Constants } from '../mocks/constants.js';

export default {
  name: 'CartItem',
  props: {
    itemRef: { default: '' },
    itemUrlid: { default: '' },
    itemText: { default: '' },
    itemImage: { default: '' },
    itemPrice: { default: '' },
    itemSize: { default: '' },
    itemTotalPrice: { default: '' },
    itemQuantity: { default: 0 }
  },
  data () {
    return {
      quantities: null,
      selectedQuantity: null,
      constantCloseButton: null,
      constantCommons: null
    }
  },
  created() {
    this.constantCloseButton = Constants.shared.buttons.CLOSE;
    this.constantCommons = Constants.shared.literals.commons;
    this.quantities = this.$store.getters.getQuantities;
    this.selectedQuantity = this.itemQuantity;
  },
  mounted() {
    this.$refs.quantitySelect.options.selectedIndex = this.itemQuantity - 1;
  },
  computed: {
    totalBudget() {
      const floatedPrice = this.selectedQuantity * parseFloat(utils.parsePrice(this.itemPrice));
      return floatedPrice.toFixed(2);
    }
  },
  methods: {
    goToUrl(param) {
      this.$router.push(param);
    },
    deleteItem() {
      let itemIndex = utils.getItemIndex(this.$store.state, { itemid: this.itemRef });
      this.$store.dispatch('deleteToCart', itemIndex);
    },
    calculatePrice() {
      const optionIndex = this.$refs.quantitySelect.options.selectedIndex;
      const optionValue = this.$refs.quantitySelect.options[optionIndex].value;
      this.selectedQuantity = parseInt(optionValue, 10);
    }
  },
  watch: {
    selectedQuantity: function (newVal) {
      const sendItem = {
        itemRef: this.itemRef,
        totalBudget: this.totalBudget,
        pax: newVal
      }
      EventBus.$emit('totalPriceChanged', sendItem);
    }
  }
}
</script>

<style lang="scss" scoped>
.cart-item-wrapper {
  display: flex;
  -ms-flex-direction: row;
  -webkit-flex-direction: row;
  flex-direction: row;
  position: relative;
  margin-bottom: 24px;
  a {
    cursor: pointer;
    img {
      max-width: 75px;
      max-height: 100%;
      margin: 0 auto;
    }
  }
  .flex {
    display: flex;
    -ms-flex-direction: row;
    -webkit-flex-direction: row;
    flex-direction: row;
    -ms-flex: 1 1 auto;
    -webkit-flex: 1 1 auto;
    flex: 1 1 auto;
    margin-left: 24px;
    .name {
      -ms-flex: 1 1 auto;
      -webkit-flex: 1 1 auto;
      flex: 1 1 auto;
      line-height: 20px;
      font-weight: var(--weight-intermediate);
      float: left;
      width: calc(100% - 438px);
      margin-top: 26px;
      margin-right: 30px;
      a {
        display: inline-block;
        max-width: 100%;
        text-decoration: none;
        color: var(--grey-dark);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        cursor: pointer;
      }
    }
    .detail {
      display: flex;
      -ms-flex-direction: row;
      -webkit-flex-direction: row;
      flex-direction: row;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
      margin-top: 26px;
      margin-right: 30px;
      height: 20px;
      .quantity {
        min-width: 80px;
        width: 160px;
        .shop-select {
          display: inline-block;
          position: relative;
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
          > [prefix] {
            position: absolute;
            left: 0px;
            top: calc(50% - 8px);
            line-height: 16px;
            color: var(--grey-light);
            pointer-events: none;
            cursor: default;
          }
          > select {
            width: 100%;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            padding: 8px 24px 8px 0;
            border: none;
            background-color: transparent;
            border-radius: 0;
            font-size: var(--font-litle);
            font-weight: var(--weight-normal);
            color: var(--app-primary-color);
            overflow: hidden;
            margin: 0;
            outline: none;
            font-size: var(--font-subtitle);
            padding-left: 40px;
            cursor: pointer;
            option {
              font-weight: var(--weight-normal);
              display: block;
              white-space: pre;
              min-height: 1.2em;
              padding: 0px 2px 1px;
            }
          }
          .select-arrow::after {
            content: '\25BC';
            display: block;
            position: absolute;
            bottom: calc(50% - 0.75em);
            right: 8px;
            speak: none;
            -webkit-transform: scaleY(.6);
            transform: scaleY(.6);
            color: var(--app-secondary-color);
            pointer-events: none;
            cursor: pointer;
          }
        }
      }
      .price,
      .size {
        display: inline-block;
        white-space: nowrap;
        color: var(--grey-light);
      }
      .size {
        min-width: 70px;
        width: 144px;
        & > span {
          margin-left: 10px;
        }
      }
      .price {
        min-width: 70px;
        width: 100px;
      }
      .delete-button {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-10px);
        width: auto;
        height: auto;
        margin: 0;
        padding: 0;
        line-height: 1;
        color: var(--grey-light);
        cursor: pointer;
        &:focus {
          outline: 0;
        }
      }
    }
  }
}
</style>
