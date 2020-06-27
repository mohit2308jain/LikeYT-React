import React from 'react';
import VideoItem from './VideoItem';

class VideoList extends React.Component {
    
    render(){ 
        const {videos, onVideoSelect} = this.props;

        const renderedList = videos.map((video) => {
            return (<div className="my-3">
                    <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>
                </div>);
        }); 

        return(
            <div className="col-12">{renderedList}</div>
        );
    }
}

export default VideoList;