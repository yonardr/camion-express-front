<template>
  <div class="card__white">
    <div class="img"></div>
    <div class="content">
      <h2>Авторизация</h2>
      <div>
      <h3>Логин</h3>
      <my-input v-model="form.login.value"
                class="input"
                placeholder="Номер телефона или Email"/>
      </div>
      <div>
      <h3>Пароль</h3>
      <my-input v-model="form.password.value"
                placeholder="Введите пароль" />
      </div>

      <my-button class="btn btn2" @click="submit">Войти</my-button>
      <my-button class="btn">Регистрация</my-button>
    </div>
  </div>
</template>

<script>
import MyInput from "@/components/UI/MyInput.vue";
import MyButton from "@/components/UI/MyButton.vue";
import {useAuth} from "@/components/hooks/Auth/useAuth";
import {useFetchSub, useSubmit} from "@/components/hooks/MainPage/useSubmit";
import router from "@/router";
const required = val => !!val
const minLength = num => val => val.length >= num
export default {
  components: {MyButton, MyInput},
  setup(){
    const form = useSubmit({
      login: {
        value: '',
        validators: {required, minLength: minLength(6)}
      },
      password:{
        value : '',
        validators: {required, minLength: minLength(8)}
      },
    });
    const submit = async() => {
      const {jwt} = await useAuth(form)
      console.log(jwt.value)
      if(jwt.value === false){
        alert('Невенрный логин или пароль')
      }
      else{
        localStorage.jwt = jwt.value;
        router.push({name: 'personal'})
      }

    }
    return{form, submit}
  }
}
</script>

<style lang="scss" scoped>
@import "../../variables";

.card__white{
  @include card(white);
  display: flex;
  width: 1200px;
  height: 600px;
}
.img{
  width: 600px;
  height: 600px;
  border-radius: 30px;
  background: no-repeat center url("@/assets/auth/auth_img2.png"), lightgray 50%;
}
.content{
  width: 600px;
  padding: 65px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
h2{
  text-align: center;
  margin-bottom: 24px;
}
h3{
  margin-top: 11px;
}
.input{
  margin-top: 11px;
  border: solid 1px $c_blue;
  border-radius: 20px;
  background: #F9F9F9;
  width: 100%;
  height: 53px;
  &::placeholder{
    color: rgba(0, 0, 0, 0.20);
    font-family: Montserrat, sans-serif;
    font-size: 16px !important;
    font-weight: 700 !important;
  }
}

.btn{
  width: 100%;
  height: 100%;
  max-height: 53px;
  border-radius: 30px;
  background: #F2B976;
  border: 3px solid #F2B976;

  color: #000;

  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin: 7px 0;
}
.btn2{
  border: 3px solid #F2B976;
  background: #FFF;
  margin-top: 51px;
}
</style>