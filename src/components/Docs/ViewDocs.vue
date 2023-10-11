<template>
  <div class="module">
  <div v-for="item in docs">
    <h5>{{item.type}}</h5>
    <div v-if="item.obj">
      <a :href="f(item.obj.path)" target="_blank">{{item.obj.name}} </a>
      <button v-if="deleteField" :value="id" @click="$emit('update:id', item.obj.id)">X</button>
    </div>
  </div>
  </div>
</template>

<script>
import {useFetchDocs} from "@/components/hooks/DocPage/useFetch";
import {ref} from "vue";
export default {
  props: {
    deleteField: false,
    id: Number
  },
setup(props, context){
  const {docs} = useFetchDocs();

  function f(path){
    return `${process.env.VUE_APP_API_URL}/${path}`
  }

  return {docs, f}
},

}
</script>

<style lang="scss" scoped>
@import '../../variables.scss';
.module{

}
h5{
  margin-top: 50px;
  font-size: 30px;
  color: $c_blue;
  line-height: 142%;
  font-weight: 700;
}
a{
  text-decoration: none;
}
</style>