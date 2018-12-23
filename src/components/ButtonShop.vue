<template>
  <div class="button-shop-wrapper">
    <button>
      <slot></slot>
    </button>
  </div>
</template>

<script>
  export default {
    name: 'ButtonShop'
  }
</script>

<style lang="scss" scoped>
.button-shop-wrapper {
  display: inline-flex;
  button {
    width: 100%;
    font-size: var(--font-normal-plus);
    font-weight: var(--weight-intermediate);
    background-color: var(--white-pure);
    border: 2px solid var(--black-pure);
    color: var(--black-pure);
    font-family: var(--app-font);
    padding: 8px 24px;
    cursor: pointer;
    outline: 0;
    &:active {
      background-color: var(--black-pure);
      color: var(--white-pure);
    }
  }
}

@media (max-width: 768px) {
  .button-shop-wrapper {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 63px;
    button {
      background-color: var(--button-bg);
      color: var(--white-pure);
      font-weight: var(--weight-bold);
    }
  }
}

</style>
