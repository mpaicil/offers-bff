import axios from 'axios'
import config from 'config'

const hostname = config.get('offer-service.hostname')
const baseUrl = `http://${hostname}:8080/offers-service/v1/products`

const axiosOptions = {
    timeout: 1500,
    headers: {
        Accept: '*/*',
        'Content-Type': 'application/json;charset=utf-8'
    }
};

const axiosInstance = axios.create(axiosOptions);

const offersClient = (param) => {
    console.log(`param is: ${param}`)
    return axiosInstance
        .get(baseUrl + '?' + param)
        .then(response => response.data)
        .catch(error => error);
}

export default offersClient