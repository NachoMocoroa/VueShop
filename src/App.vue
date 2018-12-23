<template>
  <div id="app">
    <header-shop></header-shop>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <footer>
      <footer-shop :href-link="link"></footer-shop>
    </footer>
  </div>
</template>

<script>
  import HeaderShop from './components/HeaderShop.vue';
  import FooterShop from './components/FooterShop.vue';
  import EventBus from './event-bus';

  export default {
    name: 'App',
    components: {
      HeaderShop,
      FooterShop
    },
    data () {
      return {
        link: 'https://vuejs.org/'
      }
    },
    created() {
      EventBus.$on('displayMenu', this.displayMenu);
    },
    beforeDestroy() {
      EventBus.$off('displayMenu');
    },
    methods: {
      displayMenu(param) {
        const bodyElement = document.body;
        if (param) {
          bodyElement.classList.remove('is-hidden');
          bodyElement.classList.add('is-visible');
        } else {
          bodyElement.classList.remove('is-visible');
          bodyElement.classList.add('is-hidden');
        }
      }
    }
  }
</script>

<style lang="scss" scope>
#app {
  position: relative;
  text-align: center;
  .is-visible {
    background: var(--bg-overlay);
    opacity: .8;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    overflow: hidden;
  }
  .is-hidden #header-shop .menu-list-responsive{
    display: none;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
}
</style>


