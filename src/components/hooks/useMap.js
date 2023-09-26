import axios from 'axios'
import {ref, onMounted} from 'vue'

export function useMap(){
    const cars = ref([])
    const fetching = async () => {
        try{
            const response = await axios.get('http://localhost:5000/trucks')
            cars.value = response.data;
        }
        catch (e) {alert('Ошибка')}
    }
    onMounted(fetching)
    return {cars}
}