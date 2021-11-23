import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID iy0knd9Iy2sEiHbup3MbrI6woqPa2xlsrEmOImQWJto'
    }
});