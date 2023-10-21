<template>
  <div class="module">
  <div v-for="item in docs">
    <h5>{{item.type}}</h5>
    <div v-if="item.obj">
      <a :href="f(item.obj.path)" target="_blank">{{item.obj.name}} </a>
      <button v-if="deleteField" @click="id=item.obj.id;dialogVisible=true">X</button>
    </div>
  </div>
    <my-dialog v-model:show="dialogVisible">
      <my-button :color="'orange'" @click="deleteDoc">Удалить</my-button>
    </my-dialog>
  </div>
</template>

<script>
import {useFetchDocs} from "@/components/hooks/DocPage/useFetch";
import {ref, watch} from "vue";
import MyDialog from "@/components/UI/MyDialog.vue";
import MyButton from "@/components/UI/MyButton.vue";
import {useDeleteDoc} from "@/components/hooks/DocPage/useDeleteFile";
export default {
  components: {MyButton, MyDialog},
  props: {
    deleteField: false,
  },
setup(props, context){
  const id = ref (null)
  const {docs} = useFetchDocs();
  const dialogVisible = ref(false)
  function f(path){
    return `${process.env.VUE_APP_API_URL}/${path}`
  }
  function deleteDoc(){
    const {count} = useDeleteDoc({id})
    if (count > 0) alert('Удалил все')
    else alert('Не удалил')
  }

  return {id, docs, f, dialogVisible, deleteDoc}
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