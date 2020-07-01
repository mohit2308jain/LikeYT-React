import axios from 'axios';

//See Text file
const KEY = 'AIzaSyDp8N8eQ7KE_8h3Pn8QvzWMh3dbtVkCQc8';

export const baseParams = {
    part: "snippet",
    maxResults: 15,
    key: KEY
};

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
});
