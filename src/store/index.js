import { createStore } from 'vuex'
import {advantageModule} from "@/store/advantageModule";
import {partnerModule} from "@/store/partnerModule";

export default createStore({
  modules: {
    advantages: advantageModule,
    partners: partnerModule
  }
})
