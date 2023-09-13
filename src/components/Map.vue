<template>
  <div>
    <h2>КАРТА</h2>
    <div>Местоположение машин отслеживается в реальном времени.</div>
  <div class="mask_map"></div>
    <YandexMap :settings="settings" :coordinates="[56.08318, 86.018216]" class="map">
      <!--Markers-->
    </YandexMap>

  </div>
</template>

<script>
import { YandexMap, YandexMarker } from 'vue-yandex-maps'
import { loadYmap } from 'vue-yandex-maps'
export default {
  components: { YandexMap, YandexMarker  },
  data() {
    return {
      settings: {
        apiKey: 'dcd16f0c-9275-43da-87b2-f77c71a230ab',
        lang: 'ru_RU',
        coordorder: 'latlong',
        enterprise: false,
        version: '2.1',
      }
    }
  },
  async mounted() {
    await loadYmap({ ...this.settings, debug: true });
    // здесь доступна переменная ymaps
    const MAP = new ymaps.Map("map", {
      center: [56.08318, 86.018216],
      zoom: 5
    });
    MAP.controls.remove('geolocationControl'); // удаляем геолокацию
    MAP.controls.remove('searchControl'); // удаляем поиск
    MAP.controls.remove('trafficControl'); // удаляем контроль трафика
    MAP.controls.remove('typeSelector'); // удаляем тип
    MAP.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    MAP.controls.remove('rulerControl'); // удаляем контрол правил
  }


}
</script>

<style scoped>
.map{
  height: 400px;
}
.mask_map{

  position: relative;
  margin-top: 10px;
  justify-content: space-between;
  padding: 56px 96px 88px;
  background: linear-gradient(to top, red 8%, transparent 20%, transparent 90%, #fff 95%);
  pointer-events: none;
  z-index: 1;
  height: 105%;
}
</style>