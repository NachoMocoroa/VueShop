<template>
  <div class="card">
    <div class="card-wrapper">
      <div class="card-wrapper-img"
      @click="goToUrl(clicked)">
        <img :src="image">
      </div>
      <div class="card-wrapper-text">
        <h2>{{ text }}</h2>
      </div>
      <div class="card-wrapper-button">
        <button-shop
        @click.native="goToUrl(clicked)">
          {{ constantShopButton }}
        </button-shop>
      </div>
    </div>
  </div>
</template>

<script>
  import ButtonShop from './ButtonShop.vue';
  import { Constants } from '../mocks/constants.js';

  export default {
    name: 'CardItem',
    components: {
      ButtonShop
    },
    props: {
      image: { default: '' },
      text: { default: '' },
      clicked: { default: '' }
    },
    data () {
      return {
        constantShopButton: null,
      }
    },
    created() {
      this.constantShopButton = Constants.shared.buttons.SHOP_NOW;
    },
    methods: {
      goToUrl(param) {
        this.$router.push('/List/' + param);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .card {
    .card-wrapper {
      .card-wrapper-img {
        position: relative;
        height: 320px;
        overflow: hidden;
        background-size: cover;
        background-position: center;
        cursor: pointer;
        &::after {
          display: block;
          content: '';
          position: absolute;
          transition-property: opacity;
          transition-duration: 0s;
          transition-delay: 90ms;
          pointer-events: none;
          opacity: 0;
          top: 5px;
          left: 5px;
          right: 5px;
          bottom: 5px;
          outline: var(--outline-color) auto 5px;
          outline: -moz-mac-focusring auto 5px;
          outline: -webkit-focus-ring-color auto 5px;
        }
        img {
          max-width: 100%;
          max-height: 100%;
          margin: 0 auto;
          position: absolute;
          top: 0;
          bottom: 0;
          left: -9999px;
          right: -9999px;
          max-width: none;
        }
      }
      .card-wrapper-text {
        h2 {
          font-size: var(--font-normal);
          font-weight: var(--weight-intermediate);
          margin: 32px 0;
        }
      }
    }
  }
</style>
