import React from 'react';

const VideoItem = ({video, onVideoSelect}) => {
    return(
        <div onClick = {() => onVideoSelect(video)} className="row border border-white" style={{cursor: 'Pointer'}}>
            <img className="w-100 h-100 col-6 pr-0 mx-auto my-auto" 
                src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
            <div className="col-6 pl-2">
                <div>{video.snippet.title}</div>
            </div>
        </div>
    );
}

export default VideoItem;