<template>
  <div class="purchase-popup">
    <div class="header-pop-up">
      <span>{{ constantAddedToCart }}</span>
      <i class="fas fa-times" @click="close"></i>
    </div>
    <div class="container-pop-up">
      <button-shop
      @click.native="goToUrl('Cart')">
        {{ constantViewCartButton }}
      </button-shop>
      <button-shop
      @click.native="goToUrl('checkout')">
        {{ constantCheckoutButton }}
      </button-shop>
    </div>
  </div>
</template>

<script>
  import ButtonShop from './ButtonShop'
  import EventBus from '../event-bus';
  import { Constants } from '../mocks/constants.js';

  export default {
    name: 'PurchasePopUp',
    components: {
      buttonShop: ButtonShop
    },
    data() {
      return {
        isHiddenPopUp: false,
        constantViewCartButton: null,
        constantCheckoutButton: null,
        constantAddedToCart: null
      }
    },
    created() {
      this.constantViewCartButton = Constants.shared.buttons.VIEW_CART;
      this.constantCheckoutButton = Constants.shared.buttons.CHECKOUT;
      this.constantAddedToCart = Constants.shared.literals.purchase_popup.ADDED_TO_CART;
    },
    methods: {
      close() {
        EventBus.$emit('closePopUp');
      },
      goToUrl(url) {
        this.$router.push('/' + url);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .purchase-popup {
    width: 100%;
    height: 113px;
    padding: 12px;
    z-index: 1;
    box-shadow: 0 0 10px var(--box-shadow-dark);
    background: var(--white-pure);
    position: fixed;
    bottom: 0;
    > .header-pop-up {
      height: 50px;
      text-align: left;
      padding-left: 10px;
      > span {
        position: relative;
        top: 10px;
        font-weight: var(--weight-intermediate);
      }
      .fa-times {
        float: right;
        font-size: var(--font-title-small);
        margin-right: 20px;
        cursor: pointer;
      }
    }
    .container-pop-up {
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex: auto;
      & * {
        width: 47%;
      }
    }
  }

  @media (min-width: 768px) {
    .purchase-popup {
      width: 320px;
      right: 20px;
      top: 100px;
      & > .header-pop-up {
        .fa-times {
          margin-right: 0px;
        }
      }
      .container-pop-up {
        display: flex;
        align-items: center;
        justify-content: space-around;
      }
    }
  }
</style>
