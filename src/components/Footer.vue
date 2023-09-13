<template>
  <div class="footer">
    <div class="footer__content __container">
      <router-link to="" class="link">Правила перевозки груза</router-link>
      <router-link to="" class="link">Документы компании</router-link>
      <router-link to="" class="link">Документы для перевозки</router-link>
    </div>
    <div class="line __container"></div>
    <div class="footer__content __container">
      <router-link to="" class="link">8 (855)-247-51-20</router-link>
      <router-link to="" class="link">г.Набережные Челны, ул.Мензелинский тракт, д.30A</router-link>
      <router-link to="" class="link">astron71@gmail.com</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import '../variables';
.footer{
  margin-top: 100px;
  background: $c_blue;
  padding: 35px 0;
}
.footer__content{
  display: flex;
  .link{
    color: #fff;
    margin: 0 auto;
    text-decoration: none;
  }

}
.line{
  border: 0.5px solid gray;
  width: 100%;
}
</style>