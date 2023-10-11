<template>
  <div>

    <ViewDocs :deleteField="true" v-model:id="id"></ViewDocs>

  </div>
</template>

<script>

import ViewDocs from "@/components/Docs/ViewDocs.vue";
import {ref, watch} from "vue";

export default {
  components: {ViewDocs},
super(){
 const id = ref(0)

  watch(id, ()=> console.log('id change ', id))
  return {id}
}
}
</script>

<style lang="scss" scoped>

</style>