<template>
<div>
  <div class="__container">
    <div class="down">
      <h1>Транспортно-логистическая компания «КамионЭкспресс»</h1>
      <div class="text">
        Перевозка сборных грузов
        <br>
        (Сибирь, Дальний Восток, Урал, Север, Юг)
      </div>

      <div class="btns">
        <my-button :color="'orange'">Оставить заявку</my-button>
        <my-button :color="'blue'">Отследить транспорт</my-button>
      </div>

    </div>

  </div>

  <img src="../assets/main.jpg" >
</div>
</template>

<script>
import MyButton from "@/components/UI/MyButton";
export default {
  name: "StartView",
  components: {MyButton},
}
</script>

<style scoped lang="scss">
@import "../variables";

.down{
  position: absolute;
  margin-top: 200px;
}
h1{
  z-index: 2;
  color: $c_blue;
  font-size: 60px;
  font-weight: 800;
  width: 600px;
}

.text{
  margin-top: 25px;
  color: $c_gray;
  text-shadow: 1px 1px 1px #252B42;
  font-size: 20px;
  line-height: 150%;
}

.btns{
  margin-top: 20px;
}

img{
  width: 100%;
  height: 100vh;
  object-fit: cover;
}
</style>