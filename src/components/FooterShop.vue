<template>
  <div class="footer-shop">
    <a :href="hrefLink">{{ constsFooter.LINK_TEXT }}</a>
    <div class="demo-label">{{ constsFooter.STRING }}</div>
  </div>
</template>

<script>
  import { Constants } from '../mocks/constants.js';

  export default {
    name:'FooterShop',
    props: {
      hrefLink: {default:'', type: String}
    },
    data () {
      return {
        constsFooter: null
      }
    },
    created() {
      this.constsFooter = Constants.shared.literals.footer;
    }
  }
</script>

<style lang="scss" scoped>
  .footer-shop {
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    margin-top: 20px;
    line-height: 24px;
    font-size: var(--font-normal);
    a {
      color: var(--grey-light);
      text-decoration: none;
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
    .demo-label {
      box-sizing: border-box;
      width: 120px;
      padding: 6px;
      margin: 8px auto 0;
      background-color: var(--grey-dark);
      color: var(--white-pure);
      text-transform: uppercase;
    }
  }
</style>
