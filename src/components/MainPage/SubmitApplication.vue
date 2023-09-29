<template>
  <div>
    <h2>Оставить заявку</h2>
    <div class="card">
      <my-input
          type="text"
          v-model="submit.name"
          placeholder="Имя"
          class="input"
      />
      <my-input
          type="email"
          v-model="submit.email"
          placeholder="Email"
          class="input"
      />
      <my-input
          type="tel"
          v-model="submit.tel"
          placeholder="Телефон"
          class="input"
      />
      <div class="upload">
          <input
              class="input__file"
              type="file"
              ref="file"
              @change="onFileChange"
              multiple
          >
        <div class="file-dummy" :style="green">
          <div class="success" :style="view">Файл выбран</div>
          <div class="default" :style="noview" >Выберите файл</div>
        </div>

        <router-link to="https://camionexpress.ru/" class="sub">Скачать файл</router-link>
      </div>

      <my-button :color="'orange'" class="btn" @click="sendReq">Отправить</my-button>
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton";
import MyInput from "@/components/UI/MyInput";
import axios from 'axios'
export default {
  components: {MyInput, MyButton},
  data(){
    return{
      submit: {
        name: '',
        email: '',
        tel: '',
      },
      changeInput: false,
    }
  },
  methods:{
    onFileChange(event) {
      let files = event.target.files || event.dataTransfer.files;
      if (files.length) this.changeInput = true;
      else this.changeInput = true;
    },
    sendReq(){
      console.log(this.name)
      const file = this.$refs.file.files[0];
      const formData = new FormData()
      formData.append('name', 'sfdfsd')
      formData.append('email', 'fsdf')
      formData.append('tel', 'fsdfsdf')
      formData.append('file', file)
      axios.post('http://localhost:5000/emailer', formData, {
        headers: {'Content-Type': 'multipart/form-data'}
      })
      alert('Отправлено')
    }
  },
  computed: {
    view(){
      if(this.changeInput) return {display: 'inline-block'}
      else return {display: 'none'}
    },
    noview(){
      if(this.changeInput) return {display: 'none'}
      else return {display: 'inline-block'}
    },
    green(){
      if(this.changeInput) return {
        'border-color' : 'rgba(0, 255, 0, 0.4)',
        'background-color': 'rgba(0, 255, 0, 0.3)',
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../variables";

h2{
  margin-bottom: 20px;
}

.card{
  @include card(white);
  padding: 30px 50px;
}
.upload{
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
}
.file-area {
  width: 100%;
  position: relative;
}

.file-dummy {
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 58px;
  background: rgba(255, 255, 255, 0.2);
  border: 2px dashed #252b42;
  border-radius: 37px;
  text-align: center;
  transition: background 0.3s ease-in-out;
}

.file-dummy:hover {
  background: rgba(255, 255, 255, 0.1);
}
.input__file{
  position: absolute;
  width: 50%;
  opacity: 0;
  cursor: pointer;
}
.input__file:focus + .file-dummy {
  outline: 2px solid rgba(255, 255, 255, 0.5);
  outline: -webkit-focus-ring-color auto 5px;
}
.input{
  margin: 5px 0;
}
.sub{
  display: flex;
  width: 100%;
  margin-left: 1%;
  min-height: 58px;
  color: #252B42;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.2);
  border: 2px dashed #252b42;
  border-radius: 37px;
  text-align: center;
  transition: background 0.3s ease-in-out;
  text-decoration: none;
}

.btn{
  width: 100%;
  height: 58px;
  &:hover{
    border-color: $c_orange;
  }

}
</style>