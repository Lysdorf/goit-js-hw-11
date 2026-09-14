import axios from 'axios';

const API_KEY = "57544927-80e3a47216b97f3e9b612798b";
const BASE_URL = "https://pixabay.com/api/";

export function getImagesByQuery(query) {
    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true'
    });

    return axios.get(BASE_URL, {params}).then(response => response.data);
}
    