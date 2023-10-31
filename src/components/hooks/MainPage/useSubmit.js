import {reactive, computed, onMounted} from 'vue'
import axios from "axios";
import {useField} from "@/components/hooks/MainPage/useField";

export function useSubmit(init = {}){
    const form = reactive({})
    const validKey = 'valid'

    for(const [key, value] of Object.entries(init)){
        form[key] = useField(value)
    }

    const withoutValid = k => k !== validKey

    form[validKey] = computed(() => Object.keys(form).filter(withoutValid).every(k => form[k].valid))

    return form
}

export async function useFetchSub(init ={}, file){

    if(file) {
        const formData = new FormData()
        formData.append('name', init.name.value)
        formData.append('email', init.email.value)
        formData.append('tel', init.tel.value)
        formData.append('file', file)
        //console.log(file)
        const res = await axios.post('http://localhost:5000/emailer/file', formData, {
            headers: {'Content-Type': 'multipart/form-data'}
        })
        return res.status
    }
    else{
        const res = await axios.post('http://localhost:5000/emailer', {
            name: init.name.value,
            email: init.email.value,
            tel: init.tel.value,
        })
        return res.status
    }

}

