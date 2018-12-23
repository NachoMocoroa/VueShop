<template>
  <div class="input-wrapper">
    <input
    required
    :type="type"
    :id="id"
    :name="name"
    @blur="validation(type)"
    @focus="persistError"
    v-model="inputValue"
    :class="{ 'error-mark': isFormError }">
    <span class="bar">
      <span class="error-text"
      v-if="isFormError">{{ constantPrefixError }} {{ label }}</span>
    </span>
    <label
    :label="label">{{ label }}</label>
  </div>
</template>

<script>
  import EventBus from '../event-bus';
  import { Constants } from '../mocks/constants.js';

  export default {
    name: 'InputShop',
    props: {
      label: { default: '', type: String },
      type: { default: '', type: String },
      id: { default: '', type: String },
      name: { default: '', type: String },
      isError: { default: false, type: Boolean }
    },
    data() {
      return {
        inputValue: '',
        isFormError: false,
        cvvLength: 3,
        postalLength: 5,
        cardNumLength: 5,
        minimumLength: 2,
        constantPrefixError: null
      }
    },
    created() {
      this.constantPrefixError = Constants.shared.literals.commons.prefix_error;
    },
    methods: {
      validation(type) {
        let isValid = false;
        if (this.inputValue !== '') {
          isValid = this.checkValidation(type, this.inputValue);
        } else if (this.isFormError && this.inputValue === ''){
          isValid = false;
        } else {
          isValid = true;
        }
        isValid ? this.isFormError = false : this.isFormError = true;
        EventBus.$emit('errorState', this.isFormError);
      },
      checkValidation(type, val) {
        let result = false;
        switch (type) {
          case 'email':
            const email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            result = email.test(String(val).toLowerCase());
            break;
          case 'tel':
            const phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
            result = phoneno.test(val);
            break;
          case 'text':
            result = this.filterTextValidation(this.name, val);
            break;
          default:
            console.log('Type not registered: ', type);
            break;
        }
        return result;
      },
      filterTextValidation(param, val) {
        const onlyLetters = /^[A-Za-z]+$/;
        const onlyNumbers = /^[0-9]+$/;
        let result = false;
        switch (param) {
          case 'address':
          case 'city':
          case 'state':
          case 'cardHolder':
          case 'addressDifferent':
          case 'cityDifferent':
          case 'stateDifferent':
          case 'countryDifferent':
            result = (val.length > this.minimumLength && onlyLetters.test(val));
            break;
          case 'cardNumber':
            result = (val.length === this.cardNumLength && onlyNumbers.test(val));
            break;
          case 'postal':
          case 'postalDifferent':
            result = (val.length === this.postalLength && onlyNumbers.test(val));
            break;
          case 'cvv':
            result = (val.length === this.cvvLength && onlyNumbers.test(val));
            break;
          default:
            console.log('Name type not registered for: ', param);
            break;
        }
        return result;
      },
      persistError() {
        if(this.isFormError) {
          this.isFormError = true;
        }
      }
    },
    watch: {
      isError() {
        this.isFormError = this.isError;
        this.validation(this.type);
        return this.isFormError;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .input-wrapper {
    position: relative;
    margin-bottom: 45px;
    & * {
      box-sizing: border-box;
    }
    input {
      font-size: var(--font-normal);
      padding: 10px 10px 16px 0px;
      display: block;
      width: 100%;
      border: none;
      border-bottom: 1px solid var(--grey-light);
      &.error-mark {
        border-bottom: 2px solid var(--error-color);
      }
      &:focus {
        outline: none;
      }
      &:focus~label,
      &:valid~label {
        top: -20px;
        font-size: var(--font-normal);
        color: var(--grey-dark);
      }
      &:focus~.bar:before,
      &:focus~.bar:after {
        width: 50%;
      }
    }
    .bar {
      position: relative;
      display: block;
      width: 100%;
      &:before,
      &:after {
        content: '';
        height: 2px;
        width: 0;
        bottom: 1px;
        position: absolute;
        background: var(--grey-dark);
        transition: 0.2s ease all;
        -moz-transition: 0.2s ease all;
        -webkit-transition: 0.2s ease all;
      }
      &:before {
        left: 50%;
      }
      &:after {
        right: 50%;
      }
    }
    label {
      color: var(--grey-normal);
      font-size: var(--font-title-small);
      font-weight: var(--weight-normal);
      position: absolute;
      pointer-events: none;
      left: 0px;
      top: 10px;
      transition: 0.2s ease all;
      -moz-transition: 0.2s ease all;
      -webkit-transition: 0.2s ease all;
    }
    .error-text {
      color: var(--error-color);
      font-size: var(--font-litle);
      font-weight: var(--weight-bold);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      text-align: left;
    }
  }
</style>
