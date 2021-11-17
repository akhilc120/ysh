const axios = require("axios");

axios.defaults.baseURL = 'http://localhost:5000/api';
axios.defaults.headers.common['Authorization'] = 'test';

function getRequest(url) {
    return axios({
        method: "GET",
        url
    });
}

function postRequest(url, data) {
    return axios({
        method: "POST",
        url,
        data
    });
}

export {
    getRequest,
    postRequest
}