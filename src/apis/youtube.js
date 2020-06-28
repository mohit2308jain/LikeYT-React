import axios from 'axios';

//See Text file
const KEY = 'AIzaSyDaJX9cZfOY8h2UHbEAsN-VktugT0fvcd0';

export const baseParams = {
    part: "snippet",
    maxResults: 15,
    key: KEY
};

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
});
