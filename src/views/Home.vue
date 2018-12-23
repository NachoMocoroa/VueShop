<template>
  <div class="wrapper">
    <card-item
    v-for="(item, index) in productsItems"
    :key="index"
    :text="item.text"
    :image="item.image"
    :clicked="item.clicked"
    class="card-element"></card-item>
  </div>
</template>

<script>
  import CardItem from '../components/CardItem.vue'

  export default {
    name: 'Home',
    components: {
      CardItem
    },
    data() {
      return {
        productsItems: []
      }
    },
    created() {
      this.productsItems = this.$store.state.products;
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    max-width: var(--max-width);
    margin: 0 auto;
    .card-element {
      display: block;
      text-decoration: none;
      text-align: center;
      margin-bottom: 40px;
      &:nth-of-type(3),
      &:nth-of-type(4) {
        display: inline-block;
        width: 50%;
      }
    }
  }
</style>
