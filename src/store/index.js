import { createStore } from 'vuex'
import {advantageModule} from "@/store/advantageModule";
import {partnerModule} from "@/store/partnerModule";
import {mapModule} from "@/store/mapModule";

export default createStore({
  modules: {
    advantages: advantageModule,
    partners: partnerModule,
    map: mapModule
  }
})
