<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text">
</template>

<script>
export default {
  name: 'my-input',
  props:{
    modelValue: [String, Number]
  },
  methods:{
    updateInput(event){
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
.input{
  width: 100%;
  padding: 0 20px;
  background: #f9f9f9;
  color: #737373;
  border-radius: 37px;
  height: 100%;
  min-height: 58px;
  border: 1px solid #e6e6e6;
}
</style>