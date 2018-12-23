<template>
  <div class="checkout-wrapper">
    <div v-show="!success">
      <header>
        <h1>{{ constantElements.TITLE }}</h1>
        <span>{{ constantElements.INTRO }}</span>
      </header>
      <checkout-form></checkout-form>
    </div>
    <template v-if="formActivated">
      <div v-if="success">
        <h1>{{ constantFeedbacks.THANK_YOU }}</h1>
        <p>{{ constantFeedbacks.SUCCESS }}</p>
        <button-shop
        @click.prevent.native="finishOperation">
          {{ constantFinishButton }}
        </button-shop>
      </div>
      <div v-else class="feedback-error">
        <h1>{{ constantFeedbacks.ERROR }}</h1>
        <p>{{ constantFeedbacks.CHECK_FIELDS }}</p>
      </div>
    </template>
  </div>
</template>

<script>
  import EventBus from '../event-bus';
  import ButtonShop from '../components/ButtonShop.vue';
  import CheckoutForm from '../components/CheckoutForm.vue';
  import { Constants } from '../mocks/constants.js';

  export default {
    name: 'Checkout',
    components: {
      CheckoutForm,
      ButtonShop
    },
    data() {
      return {
        success: false,
        formActivated: false,
        constantFinishButton: null,
        constantFeedbacks: null,
        constantElements: null
      }
    },
    created() {
      this.constantFinishButton = Constants.shared.buttons.FINISH;
      this.constantFeedbacks = Constants.shared.literals.checkout.feedbacks;
      this.constantElements = Constants.shared.literals.checkout.elements;
      this.setEventBus();
    },
    beforeDestroy() {
      this.resetEventBus();
    },
    methods: {
      setEventBus() {
        EventBus.$on('activatedForm', (param) => {
          this.formActivated = param;
        });
        EventBus.$on('checkForm', (param) => {
          this.success = param;
        });
      },
      resetEventBus() {
        EventBus.$off('activatedForm');
        EventBus.$off('checkForm');
      },
      finishOperation() {
        this.formActivated = false;
        this.$router.push('/');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .checkout-wrapper {
    margin: 0 auto;
    padding: 0 24px 48px 24px;
    max-width: calc(var(--base-width) * 3);
    overflow: hidden;
    header {
      margin-bottom: 50px;
    }
    h1 {
      font-size: var(--font-normal);
    }
    .feedback-error {
      color: var(--error-color);
    }
  }
</style>
