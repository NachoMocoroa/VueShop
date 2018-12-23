<template>
  <div id="header-shop"
  :class="classTop">
    <div
    :class="{'is-visible': isVisible}"
    @click="showMenu()"></div>
    <div class="menu-list-responsive"
    :class="{'off': !isVisible}">
      <nav>
        <router-link
        v-for="(product, index) in storeData"
        :key="index"
        :to="'/' + constantRoute.LIST + '/' + product.clicked"
        @click.native="showMenu()">{{ product.text }}</router-link>
      </nav>
    </div>
    <section ref="headerNav" class="header-section">
      <div class="header">
        <div class="burguer-icon"
        @click="showMenu()">
          <i class="fas fa-bars"></i>
        </div>
        <div class="header-back"
        :class="hiddenClass"
        @click="goBack()">
          <IconItem :icon-type="'backArrow'" />
        </div>
        <div class="header-link">
          <a @click="goToUrl('')" aria-label="SHOP Home">
            {{ constantTitle.TITLE }}
          </a>
        </div>
        <div class="user-cart-section">
          <div class="userBox">
            <div v-if="userName" class="user-welcome">
              <span>{{ userName }}</span>
            </div>
            <a @click="userLog()">
              <IconItem :icon-type="'userIcon'" />
            </a>
            <div v-if="isLoging" class="userBox-wrapper">
              <div v-if="userName === null && !isLogged" class="userBox-log-div">
                <div class="user-fields">
                  <input ref="userInput" type="text" placeholder="Enter user name">
                </div>
                <div class="user-button">
                  <span @click="checkUser">
                    {{ constantButtons.LOGIN }}
                  </span>
                </div>
              </div>
              <div v-else class="userBox-log-div">
                <div class="user-button">
                  <span @click="checkUser">
                    {{ constantButtons.LOGOUT }}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="header-cart-button">
            <a @click="goToUrl('Cart')">
              <IconItem :icon-type="'cartIcon'" />
            </a>
            <template v-if="this.$store.state.cart.items.length > 0">
              <div class="cart-quantity">
                {{this.$store.state.cart.items.length}}
              </div>
            </template>
          </div>
        </div>
      </div>
      <div class="menu-list"
      :class="hiddeMenuList">
        <nav>
          <router-link
          v-for="(product, index) in storeData"
          :key="index"
          :to="'/' + constantRoute.LIST + '/' + product.clicked">{{ product.text }}</router-link>
        </nav>
      </div>
    </section>
  </div>
</template>

<script>
  import IconItem from '../components/IconItem.vue';
  import EventBus from '../event-bus';
  import { Constants } from '../mocks/constants.js';

  export default {
    name: 'HeaderShop',
    components: {
      IconItem
    },
    data () {
      return {
        storeData: null,
        scrollY: null,
        scrollPrevious: null,
        maxHeight: null,
        classTop: '',
        hiddenClass: '',
        hiddeMenuList: '',
        isVisible: false,
        isLoging: false,
        isLogged: false,
        userName: null,
        constantRoute: null,
        constantButtons: null,
        constantTitle: null
      }
    },
    created() {
      this.constantRoute = Constants.routes;
      this.constantButtons = Constants.shared.buttons;
      this.constantTitle = Constants.shared.literals.header_shop;
      this.storeData = this.$store.state.products;
      this.setDivUserListener();
    },
    mounted() {
      window.addEventListener('scroll', this.onScroll, true);
      this.maxHeight = this.$refs.headerNav.offsetHeight;
      this.checkView(this.$route.name);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.onScroll, true);
      window.removeEventListener('click', window.eventClickOutside, true);
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      },
      clickOutside(ev, contxt, clss) {
        if (ev.target.closest(clss) === null) {
          contxt.isLoging = false;
        }
      },
      setDivUserListener() {
        let vm = this;
        const classBox = '.userBox';
        window.addEventListener('click', window.eventClickOutside = function eventClickOutside(event) {
          vm.clickOutside(event, vm, classBox);
        }, true);
      },
      userLog() {
        this.isLoging = !this.isLoging;
      },
      checkUser() {
        if (this.userName === null && this.$refs.userInput.value !== '') {
          this.userName = this.$refs.userInput.value;
          this.isLogged = true;
        } else if (this.isLogged) {
          this.userName = null;
          this.isLogged = false;
        } else {
          console.log('Not registered');
        }
        this.userLog();
      },
      checkView(param) {
        param = param.toLowerCase();
        param === 'home' ? this.hiddenClass = 'no-display' : this.hiddenClass = '';
        param === 'checkout' ? this.hiddeMenuList = 'no-display' : this.hiddeMenuList = '';
        //(param === 'checkout' || param === 'cart') ? this.hiddeMenuList = 'no-display' : this.hiddeMenuList = '';
      },
      onScroll() {
        this.scrollY = Math.round(window.scrollY);
        this.scrollY > this.maxHeight ? this.classTop = 'scroll-top' : this.classTop = ''
      },
      showMenu() {
        this.isVisible = !this.isVisible;
        EventBus.$emit('displayMenu', this.isVisible);
      },
      goToUrl(url) {
        this.$router.push('/' + url);
      }
    },
    watch: {
      '$route': function (value) {
        this.checkView(value.name);
      }
    }
  }
</script>

<style lang="scss" scoped>
  #header-shop {
    .header-section {
      top: 0;
      transition: top 1s ease;
      .header {
        display: grid;
        grid-template-columns: 100px 1fr 100px;
        grid-template-rows: 1fr;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        position: relative;
        height: 64px;
        padding: 0 16px;
        font-size: var(--font-title-medium);
        .header-back {
          width: 40px;
          display: inline-block;
          position: relative;
          padding: 8px;
          outline: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          cursor: pointer;
          z-index: 0;
          line-height: 1;
          width: 40px;
          height: 40px;
          -webkit-tap-highlight-color: var(--black-rgba);
          -webkit-tap-highlight-color: transparent;
          box-sizing: border-box !important;
        }
        .burguer-icon {
          display: none;
        }
        .header-link {
          text-align: center;
          a {
            font-size: var(--font-subtitle);
            font-weight: var(--weight-intermediate);
            letter-spacing: 0.3em;
            color: var(--grey-dark);
            text-decoration: none;
            display: inline-block;
            pointer-events: auto;
            text-decoration: none;
          }
        }
        .user-cart-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          .userBox {
            position: relative;
            display: flex;
            justify-content: center;
            margin-right: 5px;
            padding-top: 7px;
            cursor: pointer;
            .user-welcome {
              margin-right: 10px;
              position: absolute;
              top: 10px;
              right: 30px;
              line-height: 1;
              text-transform: capitalize;
              cursor: default;
              span {
                font-size: var(--font-small);
                font-weight: var(--weight-bold);
              }
            }
            .userBox-wrapper {
              .userBox-log-div {
                padding: 5px 5px 10px 5px;
                position: absolute;
                top: 35px;
                right: 0;
                z-index: 1;
                font-size: var(--font-small);
                font-weight: var(--weight-normal);
                outline: 1px solid var(--grey-normal);
                box-shadow: var(--box-shadow-light);
                cursor: default;
                .user-fields {
                  background-color: pink;
                }
                .user-button {
                  min-width: 70px;
                  margin-top: 8px;
                  span {
                    outline: 2px solid var(--black-pure);
                    padding: 2px 5px;
                    cursor: pointer;
                    &:hover {
                      font-size: var(--font-normal);
                      font-weight: var(--weight-bold);
                      color: var(--white-pure);
                      background-color: var(--black-pure);
                    }
                  }
                }
              }
            }
          }
          .header-cart-button {
            position: relative;
            display: inline-block;
            padding: 8px;
            outline: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            cursor: pointer;
            z-index: 0;
            line-height: 1;
            width: 40px;
            height: 40px;
            -webkit-tap-highlight-color: var(--black-rgba);
            -webkit-tap-highlight-color: transparent;
            box-sizing: border-box !important;
            .cart-quantity {
              color: var(--white-pure);
              background: var(--grey-blue);
              position: absolute;
              top: -2px;
              right: 0;
              width: 20px;
              height: 17px;
              border-radius: 50%;
              font-size: var(--font-small);
              font-weight: var(--weight-bold);
              pointer-events: none;
              padding-top: 4px;
            }
          }
        }
      }
      nav {
        position: relative;
        height: 66px;
        a {
          display: inline-block;
          outline: none;
          padding: 9px 5px;
          font-size: var(--font-normal);
          font-weight: var(--weight-intermediate);
          text-decoration: none;
          color: var(--grey-dark);
          &.router-link-exact-active.router-link-active {
            border-bottom: 2px solid var(--grey-blue);
          }
        }
      }
    }
    .no-display {
      opacity: 0 !important;
      pointer-events: none;
      cursor: default;
    }
    .menu-list-responsive  {
      display: none;
    }
    &.scroll-top {
      width: 100%;
      position: sticky;
      top: -45px;
      background-color: var(--white-pure);
      -webkit-box-shadow: 0px 5px 10px -5px var(--black-pure);
      box-shadow: 0px 5px 10px -5px var(--black-pure);
      z-index: 1;
    }
  }

  @media (max-width: 768px) {
    #header-shop {
      position: static;
      .menu-list-responsive {
        position: absolute;
        margin-left: calc(-1 * var(--menu-list-width));
        width: var(--menu-list-width);
        z-index:1;
        background: var(--white-pure);
        height: 100%;
        font-family: var(--app-font);
        display: block;
        animation:linear alternate;
        -webkit-animation:linear alternate;
        animation-name: run;
        -webkit-animation-name: run;
        animation-duration: .3s;
        -webkit-animation-duration: .3s;
        animation-fill-mode: forwards;
        -webkit-animation-fill-mode: forwards;
        &.off {
          animation:linear alternate;
          -webkit-animation:linear alternate;
          animation-name: back;
          -webkit-animation-name: back;
          animation-duration: .3s;
          -webkit-animation-duration: .3s;
          animation-fill-mode: forwards;
          -webkit-animation-fill-mode: forwards;
        }
        a {
          display: block;
          text-align: left;
          padding: 0 16px;
          line-height: 40px;
          text-decoration: none;
          color: var(--grey-light);
          font-size: var(--font-normal);
          font-weight: var(--weight-bold);
          &.router-link-exact-active.router-link-active {
            color: var(--black-pure);
          }
        }
      }
      .header-section {
        .header {
          .header-back {
            display: none;
          }
          .burguer-icon {
            display: block;
            cursor: pointer;
          }
        }
        .menu-list {
          display: none;
        }
      }
    }
  }

  @keyframes run {
    0% { margin-left: 0; left: calc(-1 * var(--menu-list-width)); }
    100% { margin-left: 0; left: 0px; }
  }
  @keyframes back {
    0% { margin-left: 0px; }
    100% { margin-left: calc(-1 * var(--menu-list-width)); }
  }

  @-moz-keyframes run {
    0% { margin-left: 0; left: calc(-1 * var(--menu-list-width)); }
    100% { margin-left: 0; left: 0px; }
  }
  @-moz-keyframes back {
    0% { margin-left: 0px; }
    100% { margin-left: calc(-1 * var(--menu-list-width)); }
  }

  @-webkit-keyframes run {
    0% { margin-left: 0; left: calc(-1 * var(--menu-list-width)); }
    100% { margin-left: 0; left: 0px; }
  }
  @-webkit-keyframes back {
    0% { margin-left: 0px; }
    100% { margin-left: calc(-1 * var(--menu-list-width)); }
  }
</style>
