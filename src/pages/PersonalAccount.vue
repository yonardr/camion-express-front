<template>
  <div class="page">
    <div class="navbar"></div>
    <div class="content">
      <DocumentsAdmin></DocumentsAdmin>
    </div>

  </div>
</template>

<script>
import DocumentsAdmin from "@/pages/DocumentsAdmin.vue";
export default {
  components:{DocumentsAdmin}
}
</script>

<style lang="scss" scoped>
@import "../variables";
.page{
  display: flex;
}
.navbar{
  position: absolute;
  height: 100vh;
  width: 100px;
  background-color: $c_blue;
}
.content{
  margin-left: 150px;
}
</style>