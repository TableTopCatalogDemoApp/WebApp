import Axios from 'axios'

import config from './config'

const urls = {
    all: config.backendUrl + '/api/Game',
    byId: config.backendUrl + '/api/Game/'
}

let service = {}

service.getAllGames = async function() {
    return (await Axios.get(urls.all)).data;
}

service.getGameById = async function(id) {
    return (await Axios.get(urls.byId + id)).data;
}

export default service;