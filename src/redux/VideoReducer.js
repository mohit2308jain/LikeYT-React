import { FETCH_VIDEOS, SELECT_VIDEO, VIDEOS_FAILED, VIDEOS_LOADING } from './Actions';

export const videoReducer = (state = {
        isLoading: true,
        errMess: null,
        videos: [],
        selectedVideo: null
        }, action) => {
        switch(action.type){
            case FETCH_VIDEOS:
                return {...state, isLoading: false, errMess: null, videos: action.payload};
            case VIDEOS_LOADING:
                return {...state, isLoading: true, errMess: null, videos: [], selectedVideo: null};
            case SELECT_VIDEO:
                return {...state, isLoading: false, errMess: null, selectedVideo: action.payload};
            case VIDEOS_FAILED:
                return {...state, isLoading: false, errMess: action.payload};
            default:
                return state;
        }  

}