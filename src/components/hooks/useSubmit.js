import {ref, onMounted} from 'vue'
import axios from "axios";

export function useSubmit(name){

    const changeInput = ref(false)

    const onFileChange = async(event) => {
        let files = event.target.files || event.dataTransfer.files;
        if (files.length) changeInput.value = true;
        else changeInput.value = true;
    }
    const sendReq  = async() =>{
        //console.log(this.name)
        const file = this.$refs.file.files[0];
        const formData = new FormData()
        formData.append('name', 'sfdfsd')
        formData.append('email', 'fsdf')
        formData.append('tel', 'fsdfsdf')
        formData.append('file', file)
        axios.post('http://localhost:5000/emailer', formData, {
            headers: {'Content-Type': 'multipart/form-data'}
        })
        alert('Отправлено')
    }

    return {onFileChange, sendReq, changeInput}
}