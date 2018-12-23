<template>
  <div class="checkbox-wrapper">
    <input type="checkbox"
    id="checkBoxShop"
    @change="onChangeCheck($event)"/>
    <label for="checkBoxShop">
      <div>
        <i class="fa fa-check"></i>
      </div>
      <p>
        <slot></slot>
      </p>
    </label>
  </div>
</template>

<script>
  import EventBus from '../event-bus';

  export default {
    name: 'CheckboxShop',
    methods: {
      onChangeCheck(event) {
        EventBus.$emit('changeCheckEvent', event.target.checked);
      }
    }
  }
</script>

<style lang="scss" scoped>
.checkbox-wrapper {
  input {
    display:none;
    &:checked + label div i {
      color:var(--white-pure);
      opacity:1;
    }
    &:checked + label div {
      background:var(--black-pure);
    }
  }
  label {
    div {
      display: inline-flex;
      width:14px;
      height:14px;
      margin:0px;
      background:var(--white-pure);
      border:2px solid var(--black-pure);
      border-radius:2px;
      text-align:center;
      line-height:0px;
      cursor:pointer;
      i {
        font-size: var(--font-normal-plus);
        opacity:0;
      }
    }
    p {
      display: inline-flex;
      margin: 0 0 0 12px;
    }
  }
}
</style>
