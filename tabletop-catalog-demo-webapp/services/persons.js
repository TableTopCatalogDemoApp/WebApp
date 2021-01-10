import Axios from 'axios'

import config from './config'

const urls = {
    all: config.backendUrl + '/api/Person',
    byId: config.backendUrl + '/api/Person/'
}

let service = {}

service.getAllPersons = async function() {
    return (await Axios.get(urls.all)).data;
}

service.getPersonById = async function(id) {
    return (await Axios.get(urls.byId + id)).data;
}

export default service;