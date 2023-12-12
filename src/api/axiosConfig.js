import axios from 'axios';

export default axios.create({
    baseURL: 'https://de53-2603-6010-e105-b070-7ca2-d05f-3771-e8f4.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
})