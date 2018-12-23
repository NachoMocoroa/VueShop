<template>
  <div class="checkout-form-wrapper">
    <form>
      <div class="form-grid">
        <section>
          <h2>{{ constantFormLiterals.ACCOUNT_INFO }}</h2>
          <div class="row input-row">
            <input-shop
            :type="form.email.type"
            :label="form.email.label"
            :id="form.email.id"
            :name="form.email.name"
            :isError="isError"></input-shop>
          </div>
          <div class="row input-row">
            <input-shop
            :type="form.phone.type"
            :label="form.phone.label"
            :id="form.phone.id"
            :name="form.phone.name"
            :isError="isError"></input-shop>
          </div>
          <h2>{{ constantFormLiterals.SHIPPING_ADDRESS }}</h2>
          <div class="row input-row">
            <input-shop
            :type="form.address.type"
            :label="form.address.label"
            :id="form.address.id"
            :name="form.address.name"
            :isError="isError"></input-shop>
          </div>
          <div class="row input-row">
            <input-shop
            :type="form.city.type"
            :label="form.city.label"
            :id="form.city.id"
            :name="form.city.name"
            :isError="isError"></input-shop>
          </div>
          <div class="row input-row">
            <input-shop
            :type="form.state.type"
            :label="form.state.label"
            :id="form.state.id"
            :name="form.state.name"
            :isError="isError"
            class="common-row"></input-shop>
            <input-shop
            :type="form.postal.type"
            :label="form.postal.label"
            :id="form.postal.id"
            :name="form.postal.name"
            :isError="isError"
            class="common-row"></input-shop>
          </div>
          <div class="column column-top">
            <dropdown-shop
            :label="form.country.label"
            :id="form.country.id"
            :name="form.country.name"
            :options="form.country.options"></dropdown-shop>
          </div>
          <h2>{{ constantFormLiterals.BILLING_ADDRESS }}</h2>
          <div class="billing-address-picker">
            <checkbox-shop>{{ constantFormLiterals.BILLING_CHECK }}</checkbox-shop>
          </div>
          <div ref="billingAddress" :class="panelClass">
            <div class="row input-row">
              <input-shop
              :type="form.addressDifferent.type"
              :label="form.addressDifferent.label"
              :id="form.addressDifferent.id"
              :name="form.addressDifferent.name"
              :isError="isError"></input-shop>
            </div>
            <div class="row input-row">
              <input-shop
              :type="form.cityDifferent.type"
              :label="form.cityDifferent.label"
              :id="form.cityDifferent.id"
              :name="form.cityDifferent.name"
              :isError="isError"></input-shop>
            </div>
            <div class="row input-row">
              <input-shop
              :type="form.stateDifferent.type"
              :label="form.stateDifferent.label"
              :id="form.stateDifferent.id"
              :name="form.stateDifferent.name"
              :isError="isError"
              class="common-row"></input-shop>
              <input-shop
              :type="form.postalDifferent.type"
              :label="form.postalDifferent.label"
              :id="form.postalDifferent.id"
              :name="form.postalDifferent.name"
              :isError="isError"
              class="common-row"></input-shop>
            </div>
            <div class="column column-top">
              <dropdown-shop
              :label="form.countryDifferent.label"
              :id="form.countryDifferent.id"
              :name="form.countryDifferent.name"
              :options="form.country.options"></dropdown-shop>
            </div>
          </div>
        </section>
        <section>
          <h2>{{ constantFormLiterals.PAYMENT_METHOD }}</h2>
          <div class="row input-row">
            <input-shop
            :type="form.cardHolder.type"
            :label="form.cardHolder.label"
            :id="form.cardHolder.id"
            :name="form.cardHolder.name"
            :isError="isError"></input-shop>
          </div>
          <div class="row input-row">
            <input-shop
            :type="form.cardNumber.type"
            :label="form.cardNumber.label"
            :id="form.cardNumber.id"
            :name="form.cardNumber.name"
            :isError="isError"></input-shop>
          </div>
          <div class="row input-row">
            <dropdown-shop
            :label="form.expiry.label"
            :id="form.expiry.id"
            :name="form.expiry.name"
            :options="form.expiry.options"
            class="common-row-three"></dropdown-shop>
            <dropdown-shop
            :label="form.year.label"
            :id="form.year.id"
            :name="form.year.name"
            :options="form.year.options"
            class="common-row-three"></dropdown-shop>
            <input-shop
            :type="form.cvv.type"
            :label="form.cvv.label"
            :id="form.cvv.id"
            :name="form.cvv.name"
            :isError="isError"
            class="common-row-three"></input-shop>
          </div>
          <h2>{{ constantFormLiterals.ORDER_SUMMARY }}</h2>
          <div class="row order-summary-row">
            <purchase-item
            v-for="(product, index) in storeData.items"
            :key="index"
            :item-text="product.item.text"
            :item-price="product.totalprice"></purchase-item>
          </div>
          <div class="row total-row">
            <purchase-item
            :item-text="'Total'"
            :item-price="storeData.total"></purchase-item>
          </div>
          <div class="row form-button">
            <button-shop
            @click.prevent.native="validateForm">
              {{ constantPlaceOrderButton }}
            </button-shop>
          </div>
        </section>
      </div>
    </form>
  </div>
</template>

<script>
  import InputShop from './InputShop.vue';
  import DropdownShop from './DropdownShop.vue';
  import CheckboxShop from './CheckboxShop.vue';
  import ButtonShop from './ButtonShop.vue';
  import PurchaseItem from './PurchaseItem.vue';
  import EventBus from '../event-bus';
  import dataForm from '../mocks/formData.js';
  import { Constants } from '../mocks/constants.js';

  export default {
    name: 'CheckoutForm',
    components: {
      InputShop,
      DropdownShop,
      CheckboxShop,
      ButtonShop,
      PurchaseItem
    },
    data() {
      return {
        panelDiv: null,
        storeData: null,
        form: {},
        isError: false,
        isChecked: false,
        errorState: false,
        errorStateCollection: [],
        constantPlaceOrderButton: null,
        constantFormLiterals: null
      }
    },
    created() {
      this.constantPlaceOrderButton = Constants.shared.buttons.PLACE_ORDER;
      this.constantFormLiterals = Constants.shared.literals.checkout.form;
      this.form = dataForm.form;
      this.storeData = this.$store.state.cart;
      this.setEventBus();
    },
    mounted() {
      this.panelDiv = this.$refs.billingAddress;
    },
    beforeDestroy() {
      this.resetEventBus();
    },
    computed: {
      panelClass() {
        let classReturn = 'hide-panel';
        if (this.panelDiv !== null) {
          const inputsReq = this.panelDiv.querySelectorAll('input');
          this.setItemsAttribute(inputsReq, 'required', this.isChecked);
          if(this.isChecked) classReturn += ' show-panel';
        }
        return classReturn;
      }
    },
    methods: {
      setEventBus() {
        EventBus.$on('changeCheckEvent', (param) => {
          this.isChecked = param;
        });
        EventBus.$on('errorState', (errorState) => {
          this.errorState = errorState;
          if (this.errorState) {
            this.errorStateCollection.push('errorState');
          }
        });
      },
      resetEventBus() {
        EventBus.$off('changeCheckEvent');
        EventBus.$off('errorState');
      },
      setItemsAttribute(elems, att, val) {
        for (let i = 0; i < elems.length; i++) {
          elems[i].setAttribute(att, val);
        }
      },
      validateForm() {
        let num = 0;
        let isErrorCollection = [];
        const formObjectField = this.form;
        EventBus.$emit('activatedForm', true);
        for (const key in formObjectField) {
          const elementName = formObjectField[key].id;
          const element = document.getElementById(elementName);
          const reqVal = element.getAttribute('required');
          if (element !== null && reqVal !== 'false') {
            const elementValue = element.value;
            if (elementValue === '' || this.errorStateCollection.length !== 0) {
              this.isError = true;
              isErrorCollection.push(elementName);
            }
          }
        }
        if (isErrorCollection.length === 0) {
          EventBus.$emit('checkForm', true);
        } else {
          EventBus.$emit('checkForm', false);
        }
        this.errorStateCollection = [];
      }
    }
  }
</script>

<style lang="scss" scoped>
.checkout-form-wrapper {
  form {
    .form-grid {
      margin-top: 40px;
      display: flex;
      -ms-flex-direction: row;
      -webkit-flex-direction: row;
      flex-direction: row;
      @media (max-width: 767px) {
        display: block;
        margin-top: 0;
      }
      > section {
        -ms-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
        &:not(:first-child) {
          margin-left: 80px;
          @media (max-width: 767px) {
            margin-left: 0;
          }
        }
        h2 {
          font-size: var(--font-normal);
          text-align: left;
        }
        .row {
          display: flex;
          -ms-flex-direction: row;
          -webkit-flex-direction: row;
          flex-direction: row;
          -ms-flex-align: flex-end;
          -webkit-align-items: flex-end;
          align-items: flex-end;
          &.order-summary-row {
            flex-wrap:wrap;
            justify-content:flex-start;
            align-items:stretch;
            line-height: 24px;
          }
          &.total-row {
            font-weight: var(--weight-intermediate);
            margin: 30px 0;
          }
          &.form-button {
            margin-top: 30px;
          }
        }
        .input-row > * {
          -ms-flex: 1;
          -webkit-flex: 1;
          flex: 1;
          -webkit-flex-basis: 0.000000001px;
          flex-basis: 0.000000001px;
          font-size: var(--font-normal);
          display: inline-block;
          margin: 20px 0;
          &:not(:first-child) {
            margin-left: 8px;
          }
        }
        .column {
          display: flex;
          -ms-flex-direction: column;
          -webkit-flex-direction: column;
          flex-direction: column;
          &.column-top {
            margin-top: 30px;
          }
        }
        .billing-address-picker {
          margin: 28px 0;
          height: 20px;
          display: flex;
          -ms-flex-direction: row;
          -webkit-flex-direction: row;
          flex-direction: row;
          > label {
            margin-left: 12px;
          }
        }
        .hide-panel {
          overflow: hidden;
          height: 0;
          opacity: 0;
          transition: height 0ms 400ms, opacity 400ms 0ms;
          &.show-panel {
            height: 100%;
            opacity: 1;
            transition: height 0ms 0ms, opacity 600ms 0ms;
          }
        }
      }
    }
  }
}
</style>
