<template>
  <div>
        <Navbar />
        <StartView/>

        <div class="__container">
          <Calculator />
          <News />
          <Advantages/>
          <SubmitApplication />
          <Partners />
          <Contacts />
        </div>
        <Map />
        <Footer />
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

export default {
  components: {Footer, News, Calculator, Map, Contacts, Partners, SubmitApplication, Advantages, StartView, Navbar},
}
</script>

<style scoped>

</style>