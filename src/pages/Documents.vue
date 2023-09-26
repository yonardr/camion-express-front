<template>
  <div>
      <Navbar />
    <div class="__container">
      <h2>Документы</h2>

    </div>

  </div>
</template>

<script>
import Navbar from "@/components/MainPage/Navbar";
export default {
components:{
  Navbar
}
}
</script>

<style scoped lang="scss">
.__container{
  display: flex;
  justify-content: center;
}

h2{
  position: absolute;
  margin: 100px 0;

}
</style>