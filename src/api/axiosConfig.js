import axios from 'axios';

export default axios.create({
    //backend base url
    baseURL: 'https://movie-backend-sprint.onrender.com/',
    //baseURL: 'https://9bab-2603-6010-e105-b070-9c92-ea57-7062-5873.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
})