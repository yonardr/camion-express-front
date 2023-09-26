<template>
  <div>
    <h2>КАРТА</h2>
    <div v-for="car in cars">{{car}}</div>
    <div>Местоположение машин отслеживается в реальном времени.</div>
  <div class="mask_map"></div>
    <YandexMap :settings="settings"
               :coordinates="[56.08318, 86.018216]"
               :zoom="5"
               :controls="['fullscreenControl']"
               class="map">
      <YandexMarker
          v-for="car in cars"
          :coordinates="[car.Lat, car.Lng]"
          :object = "1231323"
          :properties="{
            hintContent : car.Name
          }"
          :options="{
            iconLayout: getIco(),
            iconImageHref: typeIco(car.Angle),
            iconImageSize: [15, 50],
            iconShape: {type: 'Circle', coordinates: [0, 0], radius: 30 },
            iconRotate: car.Angle,
            iconImageOffset: [car.Angle < 180 ? -15 : 0, -25],
            hintLayout: getHint(),
          }"

      ></YandexMarker>

    </YandexMap>

  </div>
</template>

<script>
import { YandexMap, YandexMarker } from 'vue-yandex-maps'
import {useMap} from "@/components/hooks/useMap";
import { loadYmap } from 'vue-yandex-maps';
export default {
  components: { YandexMap, YandexMarker },
  data() {
    return {
      settings: {
        apiKey: 'dcd16f0c-9275-43da-87b2-f77c71a230ab',
        lang: 'ru_RU',
        coordorder: 'latlong',
        enterprise: false,
        version: '2.1',
      },
    }
  },
  setup(props){
      const {cars, angleCar} = useMap()
      return{
        cars, angleCar
    }
  },
  async mounted() {
    await loadYmap(this.settings);

  },
  methods:{
    getIco(){
      return ymaps.templateLayoutFactory.createClass([
        '<div style="transform:rotate({{options.rotate}}deg);">',
        '{% include "default#image" %}',
        '</div>'
      ].join(''))
    },
    typeIco(angle){
      let img = angle < 180 ? 'ico_fu' : 'ico_fu_mirror'
      return require(`@/assets/map/${img}.png`)
    },
    getHint(){
      return ymaps.templateLayoutFactory.createClass(
          "<div class='my-hint'>" +
          "<b>{{ properties.hintContent}}</b>" +
          "</div>", {
            getShape: function () {
              var el = this.getElement(),
                  result = null;
              if (el) {
                var firstChild = el.firstChild;
                result = new ymaps.shape.Rectangle(
                    new ymaps.geometry.pixel.Rectangle([
                      [0, 0],
                      [firstChild.offsetWidth, firstChild.offsetHeight]
                    ])
                );
              }
              return result;
            }
          }
      )
    }
  }


}
</script>

<style >
.map{
  height: 600px;
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
.my-hint {
  display: inline-block;
  padding: 5px;
  height: 30px;
  position: relative;
  width: 195px;
  font-size: 11px;
  line-height: 17px;
  text-align: center;
  vertical-align: middle;
  background-color: #fff;
  border: 1px solid #CDB7B5;
  border-radius: 20px;
}
</style>