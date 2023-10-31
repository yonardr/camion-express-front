import axios from "axios";

export async function useAddDoc(init ={}){
    try{
        const formData = new FormData()
        formData.append('name', init.name)
        formData.append('type_id', init.type)
        formData.append('file', init.file)
        console.log(init.file)
        if(init.name && init.name.trim() !== '') formData.append('keep_name', false)
        else formData.append('keep_name', false)
        const res = await axios.post(`${process.env.VUE_APP_API_URL}/documents`, formData, {
            headers: {'Content-Type': 'multipart/form-data'}
        })
    }
    catch (e){
        alert('Ошибка')
    }
}