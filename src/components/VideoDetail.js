import React from 'react';
import { CardHeader, CardSubtitle, CardBody } from 'reactstrap';

const VideoDetail = ({video}) => {
    if(!video) {
        return <div>Loading...</div>
    }

    const VideoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div className="row my-3">
            <div className="col-12 embed-responsive embed-responsive-16by9 mb-3 border border-white">
                <iframe className="embed-responsive-item" 
                    title="video player" src={VideoSrc}/>
            </div>
            <div className="col-12 border border-white">
                <CardHeader className="h3">{video.snippet.title}</CardHeader>
                <hr className="border-bottom border-white"/>
                <CardBody>
                    <CardSubtitle>{video.snippet.description}</CardSubtitle>
                </CardBody>
            </div>
        </div>
    );
}

export default VideoDetail;