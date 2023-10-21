<template>
  <div class="page">
    <div class="card">
    <ViewDocs :deleteField="true"></ViewDocs>
    </div>
    <div class="card">
      <h3>Добавление документа</h3>

      <select class="select" v-model="selectType" >
        <option :value="null" disabled>Выберите тип документа</option>
        <option v-for="item in types" :value="item.id">{{item.name}}</option>
      </select>


      <label for="images" class="drop-container">
        <span class="drop-title">Drop files here</span>
        or
        <input type="file" accept="*" required>
      </label>

    </div>
  </div>
</template>

<script>

import ViewDocs from "@/components/Docs/ViewDocs.vue";
import {ref, watch} from "vue";
import MyDialog from "@/components/UI/MyDialog.vue";
import {useFetchTypesDocs} from "@/components/hooks/DocPage/useFetchTypesDocs";

export default {
  components: {MyDialog, ViewDocs},

setup(props){
    const {types} = useFetchTypesDocs()
    const selectType = ref(null)
    watch(selectType, (i,k)=>console.log(i))


    return {types, selectType}
}
}
</script>

<style lang="scss" scoped>
@import "../variables";
.page{
  display: flex;
}
.card{
  margin: 25px;
  width: 500px;
  padding: 25px;
  @include card(white);


}

.select{
  background: #eeeeee;
  border-radius: 20px;
  height: 40px;
  width: 300px;
}


.drop-container {
  position: relative;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  padding: 20px;
  border-radius: 10px;
  border: 2px dashed #555;
  color: #444;
  cursor: pointer;
  transition: background .2s ease-in-out, border .2s ease-in-out;
}

.drop-container:hover,
.drop-container.drag-active {
  background: #eee;
  border-color: #111;
}

.drop-container:hover .drop-title,
.drop-container.drag-active .drop-title {
  color: #222;
}

.drop-title {
  color: #444;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  transition: color .2s ease-in-out;
}

input[type=file] {
  width: 350px;
  max-width: 100%;
  color: #444;
  padding: 5px;
  background: #fff;
  border-radius: 10px;
  border: 1px solid #555;
}

input[type=file]::file-selector-button {
  margin-right: 20px;
  border: none;
  background: #084cdf;
  padding: 10px 20px;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  transition: background .2s ease-in-out;
}

input[type=file]::file-selector-button:hover {
  background: #0d45a5;
}
</style>