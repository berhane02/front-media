import axios from 'axios';

export default axios.create({
    baseURL: 'https://5ae0-2603-6010-e105-b070-9da9-7088-da70-abd6.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
})