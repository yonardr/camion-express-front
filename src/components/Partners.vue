<template>
  <div>
      <h2>ПАРТНЕРЫ</h2>
    <div class="group">
      <div class="group first__group">
        <img
            v-for="img in $store.state.partners.first_group"
            :key="img.id"
            :src="require(`@/assets/partners/${img.img_name}`)"/>
      </div>
      <div class="group second__group">
        <img
            v-for="img in $store.state.partners.second_group"
            :key="img.id"
            :style="{'width': img.size}"
            :src="require(`@/assets/partners/${img.img_name}`)"/>
      </div>
  </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
.group{
  display: grid;
  justify-items: center;
  align-items: center;

  .first__group,
  .second__group
  {
    grid-template-columns: repeat(3, 1000/3-0.1px);
    img{
      width: 50%;
      transition: 1s;
      opacity: 100%;
      &:hover{
        transition: .8s;
        opacity: 50%;
      }
    }
  }
  .second__group{
    grid-template-columns: repeat(2, 280px);
  }
}
</style>