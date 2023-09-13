<template>

    <div class="navbar" :class="uu">
      <div @click="$router.push('/')"><img src="../assets/logo.png"></div>
      <div class="navbar__links">
        <router-link class="link" to="/">Калькулятор</router-link>
        <router-link class="link" to="/">Новости</router-link>
        <router-link class="link" to="/">Документы</router-link>
        <router-link class="link" to="/">Контакты</router-link>
        <router-link class="link" to="/">Карта</router-link>
        <router-link class="link" to="/" style="margin-right: 0px;">+7 (855) 247-05-90</router-link>

      </div>


    </div>

</template>

<script>
export default {
  data(){
    return{
      pageOffset: 0,
    }
  },

  mounted() {
    window.addEventListener('scroll', async () =>this.pageOffset = window.pageYOffset)
  },
  // destroyed() {
  //   window.removeEventListener('scroll', this.update)
  // },
  // methods: {
  //   update() {
  //     this.pageOffset = window.pageYOffset
  //
  //   }
  // },
  computed:{
    uu(){
      if(this.pageOffset !== 0){
        return 'scroll'

      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../variables';
.navbar{
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 104px;
  width: 100%;
  position: fixed;

  background: transparent;
  transition: all 0.6s ease 0s;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 0px 0px 0px;

  img{
    width: 150px;
  }
  .navbar__links{
    margin-left: calc(1000px - 150px - 734px);
    display: flex;

    .link{
      color: $c_gray;
      margin-right: 21px;
      text-decoration: none;
      font-weight: 600;
      line-height: calc(24 / 14 * 100%);

      &:after {
        background-color: #737373; /* Цвет линии при наведении на нее курсора мыши */
        display: block;
        content: "";
        height: 1px; /* Высота линии */
        width: 0%;
        -webkit-transition: width .3s ease-in-out;
        -moz--transition: width .3s ease-in-out;
        transition: width .3s ease-in-out;
      }

      &:hover:after{
        width: 100%;
      }
    }
  }
}

.scroll{
  background : rgb(245, 245, 247);
  transition: all 0.6s ease 0s;
  box-shadow: rgba(0, 0, 0, 0.07) 15px 15px 15px 15px;
}



</style>