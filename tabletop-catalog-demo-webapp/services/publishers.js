import Axios from 'axios'

import config from './config'

const urls = {
    all: config.backendUrl + '/api/Publisher',
    byId: config.backendUrl + '/api/Publisher/'
}

let service = {}

service.getAllPublishers = async function() {
    return (await Axios.get(urls.all)).data;
}

service.getPublisherById = async function(id) {
    return (await Axios.get(urls.byId + id)).data;
}

export default service;