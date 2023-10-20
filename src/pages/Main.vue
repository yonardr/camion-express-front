<template>
  <div>
        <Navbar v-model:scrollTo="scrollTo" />
        <StartView id="start"/>

        <div class="__container">
          <Calculator id="calc"/>
          <News id="news" />
          <Advantages/>
          <SubmitApplication />
          <Partners />
          <Contacts id="contacts" />
        </div>
        <Map id="map"/>
        <Footer/>
  </div>
</template>

<script>
import Navbar from "@/components/MainPage/Navbar";
import StartView from "@/components/MainPage/StartView";
import Advantages from "@/components/MainPage/Advantages";
import SubmitApplication from "@/components/MainPage/SubmitApplication";
import Partners from "@/components/MainPage/Partners";
import Contacts from "@/components/MainPage/Contacts";
import Map from "@/components/MainPage/Map";
import Calculator from "@/components/MainPage/Calculator";
import News from "@/components/MainPage/News";
import Footer from "@/components/MainPage/Footer";
import { ref, watch} from "vue";

export default {
  components: {Footer, News, Calculator, Map, Contacts, Partners, SubmitApplication, Advantages, StartView, Navbar},
}
</script>

<style >
.__container{
  margin: 0 auto;
  max-width: 1000px;
}
@media (max-width: 1024px) {
  .__container{
    padding: 0 15px;
  }
}

</style>