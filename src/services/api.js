import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/';
const ACCESS_KEY = '7U2A_p41JcbIdtpkxdnJ94OFE2RCJBI3Klc1wvFgTYk';


const getImages = async (query, page = 1) => {
    const params = {
        query,
        page: page,
        per_page: 9,
        client_id: ACCESS_KEY,
    };
    const { data } = await axios.get('search/photos', { params });
    return data;
};

export default getImages;