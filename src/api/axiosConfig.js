import axios from 'axios';

export default axios.create({
    baseURL: ' https://2b9a-2603-6010-e105-b070-5c5f-56d0-64c4-a396.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
})