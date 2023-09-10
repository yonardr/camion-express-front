<template>
  <div>
    <h2>Оставить заявку</h2>
    <div class="card">
      <my-input
          v-model="submit.name"
          placeholder="Имя"
          class="input"
      />
      <my-input
          v-model="submit.email"
          placeholder="Email"
          class="input"
      />
      <my-input
          v-model="submit.tel"
          placeholder="Телефон"
          class="input"
      />
      <div class="upload">
        <input
            class="file__dummy"
            type="file"
            @change="previewFiles"
            multiple
        >
        <router-link to="https://camionexpress.ru/" class="file__dummy">Скачать файл</router-link>
      </div>

      <my-button :color="'orange'" class="btn">Отправить</my-button>
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton";
import MyInput from "@/components/UI/MyInput";
export default {
  components: {MyInput, MyButton},
  data(){
    return{
      submit: {
        name: '',
        email: '',
        tel: '',
        select_file: Object
      }
    }
  },
  methods:{
    previewFiles(event) {
      alert(event.target.files);
    }
  }
}
</script>

<style scoped lang="scss">
@import "../variables";

h2{
  margin-bottom: 20px;
}

.card{
  @include card(white);
  padding: 30px 50px;
}

.input{
  margin-bottom: 10px;
}
.upload{
  display: flex;
  flex: 1 1;

  .file__dummy{
    display: flex;
    width: 100%;
    min-height: 58px;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.2);
    border: 2px dashed #252b42;
    border-radius: 37px;
    text-align: center;
    transition: background 0.3s ease-in-out;
    text-decoration: none;
    color: $c_blue;
  }
}


.btn{
  width: 100%;
  height: 58px;
  &:hover{
    border-color: $c_orange;
  }

}
</style>