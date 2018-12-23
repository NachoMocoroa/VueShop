<template>
  <div class="purchase-item-wrapper">
    <span class="purchase-item-wrapper-text">{{ itemText }}</span>
    <span>${{ itemPrice }}</span>
  </div>
</template>

<script>
  export default {
    name: 'PurchaseItem',
    props: {
      itemText: {default: '', type: String},
      itemPrice: {default: '', type: String}
    }
  }
</script>

<style lang="scss" scoped>
  .purchase-item-wrapper {
    display: flex;
    -webkit-flex-direction: row;
    flex-direction: row;
    -ms-flex-align: flex-end;
    -webkit-align-items: flex-end;
    align-items: flex-end;
    line-height: 24px;
    width: 100%;
    .purchase-item-wrapper-text {
      -ms-flex: 1;
      -webkit-flex: 1;
      flex: 1;
      -webkit-flex-basis: 0.0000000001px;
      flex-basis: 0.0000000001px;
      text-align: left;
    }
  }
</style>
