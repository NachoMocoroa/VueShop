<template>
  <div class="wrapper">
    <div class="main-frame">
      <template v-if="cartData.length === 0">
        <div class="subsection">
          <p class="empty-cart">Your <icon-item :icon-type="'cartIcon'" class="cart-icon"></icon-item> is empty.</p>
        </div>
      </template>
      <template v-else>
        <div class="subsection">
          <header>
            <h1>{{ constantCommons.TITLE }}</h1>
            <span>({{ cartData.length }} {{ filterItemsLength }})</span>
          </header>
          <div class="list">
            <cart-item
            v-for="(elements, index) in cartData"
            :key="index"
            :item-ref="elements.item.id"
            :item-urlid="elements.item.urlid"
            :item-text="elements.item.text"
            :item-image="elements.item.image"
            :item-price="elements.item.price"
            :item-total-price="elements.item.totalprice"
            :item-size="elements.size"
            :item-quantity="elements.quantity"></cart-item>
          </div>
          <div class="checkout-box">
            {{ constantCommons.TOTAL }}: <span class="subtotal">${{ totalPriceCartData }}</span>
            <button-shop
            @click.native="goToUrl('checkout')">
              {{ constantCheckoutButton }}
            </button-shop>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import EventBus from '../event-bus';
  import IconItem from '../components/IconItem.vue';
  import ButtonShop from '../components/ButtonShop.vue';
  import CartItem from '../components/CartItem.vue';
  import { Constants } from '../mocks/constants.js';

  export default {
    name: 'Cart',
    components: {
      IconItem,
      ButtonShop,
      CartItem
    },
    data () {
      return {
        cartData: null,
        constantCheckoutButton: null,
        constantCommons: null
      }
    },
    created() {
      this.constantCheckoutButton = Constants.shared.buttons.CHECKOUT;
      this.constantCommons = Constants.shared.literals.commons;
      this.cartData = this.$store.state.cart.items;
      this.setEventBus();
    },
    beforeDestroy() {
      this.resetEventBus();
    },
    computed: {
      totalPriceCartData() {
        return this.$store.getters.getTotalPrice;
      },
      filterItemsLength() {
        if (this.cartData.length > 0 && this.cartData.length < 2) {
          return 'item'
        } else if (this.cartData.length > 1) {
          return 'items'
        } else {
          console.log('Not registered');
          return 'null'
        }
      }
    },
    methods: {
      setEventBus() {
        EventBus.$on('totalPriceChanged', (param) => { this.calculateTotal(param); });
      },
      resetEventBus() {
        EventBus.$off('totalPriceChanged');
      },
      goToUrl(param) {
        this.$router.push('/' + param);
      },
      calculateTotal(param) {
        this.$store.dispatch('setItemPrice', param);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    height: 100%;
    .main-frame {
      margin: 0 auto;
      padding: 0 24px 48px 24px;
      max-width: calc(var(--base-width) * 3);
      overflow: hidden;
      .subsection {
        .empty-cart {
          text-align: center;
          white-space: nowrap;
          color: var(--app-secondary-color);
          .cart-icon {
            max-width: 24px;
            display: inline-flex;
            margin: 0 10px;
          }
        }
        header {
          text-align: center;
          > h1 {
            margin: 0 0 4px 0;
            font-size: var(--font-normal);
            font-weight: var(--intermediate-weight);
          }
          > span {
            color: var(--grey-light);
            font-size: var(--font-small);
          }
        }
        .list {
          margin: 40px 0;
          .cart-item {
            display: flex;
            -ms-flex-direction: row;
            -webkit-flex-direction: row;
            flex-direction: row;
            position: relative;
            margin-bottom: 24px;
            a {
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
                font-weight: var(--intermediate-weight);
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
                      font-size: var(--font-small);
                      font-weight: var(--weight-normal);
                      color: var(--app-primary-color);
                      overflow: hidden;
                      margin: 0;
                      outline: none;
                      font-size: var(--font-subtitle);
                      padding-left: 40px;
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
                  > span {
                    margin-left: 10px;
                  }
                }
                .price {
                  min-width: 70px;
                  width: 100px;
                }
                .delete-button {
                  width: 34px;
                  height: 34px;
                  color: var(--grey-light);
                  position: absolute;
                  top: 18px;
                  right: 0;
                }
              }
            }
          }
        }
        .checkout-box {
          font-weight: var(--weight-bold);
          text-align: right;
          margin-right: 10px;
          .subtotal {
            margin: 0 64px 0 24px;
          }
        }
      }
    }
  }
</style>
