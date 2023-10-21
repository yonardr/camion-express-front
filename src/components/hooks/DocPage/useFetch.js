import axios from "axios";
import {onMounted, ref} from "vue";
import {useFetchTypesDocs} from "@/components/hooks/DocPage/useFetchTypesDocs";
export function useFetchDocs(){
    const docs = ref([])
    const fetching = async() =>{
        try {
            const types = await axios.get(`${process.env.VUE_APP_API_URL}/documents/types`)
            const all_docs = await axios.get(`${process.env.VUE_APP_API_URL}/documents`)

            types.data.map(types=>{
                const obj = {id: types.id, type: types.name}
                all_docs.data.map(item => {
                    if(item.type_id === types.id){
                        obj.obj = item
                    }
                })
                docs.value.push(obj)
            })

        }
        catch(e){
            alert('Ошибка')
        }
    }
    onMounted(fetching)
    return {docs}
}