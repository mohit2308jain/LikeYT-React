import axios from 'axios';

//See Text file
const KEY = process.env.API_KEY;

export const baseParams = {
    part: "snippet",
    maxResults: 15,
    key: KEY
};

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
});
