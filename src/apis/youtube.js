import axios from 'axios';

//See Text file
const KEY = 'AIzaSyDDkH957hH7GHHdYKDjsUWKyFXdPrc6Hok';

export const baseParams = {
    part: "snippet",
    maxResults: 15,
    key: KEY
};

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
});
