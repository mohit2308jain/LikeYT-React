import { FETCH_VIDEOS, SELECT_VIDEO, VIDEOS_FAILED, VIDEOS_LOADING } from './Actions';
import youtube, { baseParams } from '../apis/youtube';

const API_KEY_ERROR = 'Error with API KEY';
const searchTermEmpty = 'PLEASE ENTER SEARCH TERM';

export const fetchVideosWithDetail = (term) => {
    return async (dispatch) => {
        if(!term){
            dispatch(videosFailed(searchTermEmpty));
        }
        else{
            dispatch(videosLoading(term));

            await dispatch(fetchVideos(term));
        }
    }
}

export const selectVideo = (video) => ({
    type: SELECT_VIDEO,
    payload: video
});

const fetchVideos = (term) => {
    console.log(term);
    return async (dispatch) => {
        try{
            const response = await youtube.get('/search', {
                params: {
                    ...baseParams,
                    q: term
                }
            });
            dispatch({
                type: FETCH_VIDEOS,
                payload: response.data.items
            })
            dispatch(selectVideo(response.data.items[0]));
        }
        catch(error){
            dispatch(videosFailed(API_KEY_ERROR));
        }
    }
}

const videosLoading = (term) => ({
    type: VIDEOS_LOADING
});

const videosFailed = (errmess) => ({
    type:VIDEOS_FAILED,
    payload: errmess
});