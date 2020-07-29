import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {

    const renderedList = videos.map((video) => {
        return (<div className="my-3" key={video.id.videoId}>
                <VideoItem onVideoSelect={onVideoSelect} video={video}/>
            </div>);
    }); 

    return(
        <div className="col-12">{renderedList}</div>
    );
}

export default VideoList;