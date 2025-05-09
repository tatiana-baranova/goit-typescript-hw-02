import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/';
const ACCESS_KEY = '7U2A_p41JcbIdtpkxdnJ94OFE2RCJBI3Klc1wvFgTYk';


type ApiResponse = {
    results: Array<{
        id: string;
        alt_description: string;
        likes: number;
        description: string;
        created_at: string;
        tags: { title: string }[];
        urls: {
            small: string;
            regular: string;
        };
        user: {
            name: string;
            social: {
                portfolio_url: string;
            };
            location: string;
        };
    }>;
    total: number;
    total_pages: number;
};
const getImages = async (
    query: string,
    page: number
): Promise<ApiResponse> => {
    const params: Record<string, string> = {
        query: query,
        page: page.toString(),
        per_page: '9',
        client_id: ACCESS_KEY,
    };
    const { data } = await axios.get<ApiResponse>('search/photos', { params });
    return data;
};

export default getImages;

