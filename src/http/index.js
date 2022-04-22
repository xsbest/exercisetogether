import axios from "axios";

const request = axios.create({
    baseURL: 'http://175.178.45.226:8080',
    timeout: 100000,
});

export default request