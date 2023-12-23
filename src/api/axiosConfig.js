import axios from 'axios';

export default axios.create({
    //backend base url
    baseURL: 'https://movie-backend-sprint.onrender.com/',
    //headers: {"ngrok-skip-browser-warning": "true"}
})