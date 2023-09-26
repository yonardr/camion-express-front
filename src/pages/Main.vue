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
import Navbar from "@/components/Navbar";
import StartView from "@/components/StartView";
import Advantages from "@/components/Advantages";
import SubmitApplication from "@/components/SubmitApplication";
import Partners from "@/components/Partners";
import Contacts from "@/components/Contacts";
import Map from "@/components/Map";
import Calculator from "@/components/Calculator";
import News from "@/components/News";
import Footer from "@/components/Footer";

export default {
  components: {Footer, News, Calculator, Map, Contacts, Partners, SubmitApplication, Advantages, StartView, Navbar},
}
</script>

<style scoped>

</style>