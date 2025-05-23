import axios from "axios";

const RAPID_API_KEY = '7255ab5d97mshaba34d0b7f96d8bp1d0f33jsnea52f2c81e49';

export const fetcher = (url:string) => axios.get(url, {
    headers: {
        'x-rapidapi-key': RAPID_API_KEY,
        'x-rapidapi-host': 'jsearch.p.rapidapi.com',
    },
}).then(res=>res.data)