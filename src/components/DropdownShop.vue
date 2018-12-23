<template>
  <div class="dropdown-wrapper">
    <input
    type="text"
    required
    :id="id"
    :name="name"
    v-model="inputValue"
    @click="showOptions">
    <i class="fa fa-caret-down"
    @click="showOptions"></i>
    <span class="bar"></span>
    <label
    :label="label">{{ label }}</label>
    <div class="wrap-options"
    @click="showOptions">
      <div
      v-for="(opt, index) in options"
      :key="index"
      v-show="isVisible"
      @click="selectOption(opt, index)"
      class="options">
        <i class="fa fa-check"
        v-show="optionSelected === index"></i>
        <span class="option">{{ opt }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from '../event-bus';

export default {
  name: 'DropdownShop',
  props: {
    label: { default: '', type: String },
    id: { default: '', type: String },
    name: { default: '', type: String },
    options: { default: '', type: Array }
  },
  data() {
    return {
      isVisible: false,
      inputValue: this.options[0],
      optionSelected: 0
    }
  },
  created() {
    let vm = this;
    window.addEventListener('click', function(e){
      if (!vm.$el.contains(e.target)){
        vm.isVisible = false
      }
    })
  },
  methods: {
    showOptions() {
      this.isVisible = !this.isVisible;
    },
    selectOption(option,index) {
      let dropName = this.name;
      this.inputValue = option;
      this.optionSelected = index;
      EventBus.$emit('setValue', { dropName,option, index });
    }
  }
}
</script>

<style lang="scss" scoped>
.dropdown-wrapper {
  box-sizing: border-box;
  position: relative;
  margin-bottom: 45px;
  input {
    font-size: var(--font-subtitle);
    padding: 8px 24px 8px 0px;
    display: block;
    width: calc(100% - 24px);
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

  .fa-caret-down {
    position: absolute;
    top: calc(50% - 13px);
    right: 5px;
    color: var(--grey-normal);
    font-size: var(--font-title);
    cursor:pointer;
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
    font-size: var(--font-subtitle);
    font-weight: var(--weight-normal);
    line-height: 20px;
    position: absolute;
    pointer-events: none;
    left: 0px;
    top: 10px;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }

  .wrap-options {
    position: relative;
    padding: 0;
    background: var(--white-light);
    border-radius: 4px;
    text-align: left;
    position: absolute;
    width: 100%;
    top: -10px;
    z-index: 2;
    /*border: 1px solid #999999;*/
    -webkit-box-shadow:inset 0px 0px 0px 1px var(--grey-normal);
    -moz-box-shadow:inset 0px 0px 0px 1px var(--grey-normal);
    box-shadow:inset 0px 0px 0px 1px var(--grey-normal);
    /*&:after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1;
      border-radius: 4px;
      -webkit-box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.25);
      box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.25);
    }*/
    .options {
      margin: 0;
      padding: 0 0 0 20px;
      font-size: var(--font-subtitle);
      &:first-child {
        margin: 5px 0 0 0;
      }
      &:last-child {
        margin: 0 0 5px 0;
      }
      &:hover {
        background: var(--outline-color);
        color: var(--white-pure);
        /*border-radius: 4px;*/
        .fa-check {
          color: var(--white-pure);
        }
      }
      .fa-check {
        font-size: var(--font-litle);
        position: relative;
        &:before {
          /*content: "\f00c";*/
          position: absolute;
          top: -10px;
          left: -15px;
        }
      }
      .option {
        position: sticky;
        left: 40px;
      }
    }
  }

  .error-text {
    color: var(--error-color);
    font-size: var(--font-litle);
    font-weight: var(--weight-intermediate);
    float: left;
  }
}
</style>
