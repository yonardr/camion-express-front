<template>
  <div class="card__white">
    <div class="img"></div>
    <div>
      <h2>Авторизация</h2>
      <h3>Логин</h3>
      <my-input />
      <h3>Пароль</h3>
      <my-input />
      <my-button>Войти</my-button>
      <my-button>Зарегистрироваться</my-button>
    </div>
  </div>
</template>

<script>
import MyInput from "@/components/UI/MyInput.vue";
import MyButton from "@/components/UI/MyButton.vue";

export default {
  components: {MyButton, MyInput}

}
</script>

<style lang="scss" scoped>
@import "../../variables";

.card__white{
  @include card(white);
  display: flex;
  width: 1200px;
  height: 600px;

  top: 0;
  left: 0;
  position: fixed;
}
.img{
  width: 600px;
  height: 600px;
  border-radius: 30px;
  background: no-repeat center url("@/assets/auth/auth_img2.png"), lightgray 50%;
}
</style>