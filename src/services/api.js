import axios from 'axios';

const api = axios.create({
    baseURL : "https://api.invertexto.com/v1/currency"
})

export default api