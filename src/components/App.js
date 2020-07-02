import React from 'react';
import { connect } from 'react-redux';
import { Spinner } from 'reactstrap';
import '../index.css';

import { fetchVideosWithDetail, selectVideo } from '../redux/ActionCreaters';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const mapStateToProps = (state) => {
    return {
        videolist: state.videolist
    }
}

const mapDispatchToProps = (dispatch) => {
    return({
        fetchVideos: (term) => {
            return dispatch(fetchVideosWithDetail(term));
        },
        selectVideo: (video) => {
            return dispatch(selectVideo(video));
        }
    })
}

class App extends React.Component{

    componentDidMount() {
        this.onTermSubmit('news');
    }

    onTermSubmit = async (term) => {
        console.log(term);
        this.props.fetchVideos(term);
    };
    
    onVideoSelect = (video) => {
        this.props.selectVideo(video);
    }

    render(){
        const { isLoading, errMess, searchTerm, videos, selectedVideo } = this.props.videolist;
        console.log(this.props.videolist);

        let showData;

        if(isLoading){
            showData = (
                <div className="col-12 text-center">
                    <Spinner style={{ width: '5rem', height: '5rem' }} color="primary"/>
                    <hr />
                    <h1>Loading...</h1>
                </div>)
        }
        else if(errMess){
            showData = <div className="col-12 text-center"><h1>{errMess}</h1></div>
        }
        else if(videos){
            showData = (
                <div>
                    <h3 style={{textDecoration: 'underline', textAlign: 'center'}}>
                        Results for {searchTerm}
                    </h3>
                    <div className="row">
                        <div className="col-12 col-lg-8">
                            <VideoDetail video={selectedVideo} />
                        </div>
                        <div className="col-12 col-lg-4">
                            <VideoList 
                                onVideoSelect = {this.onVideoSelect} 
                                videos={videos} 
                            />
                        </div>
                    </div>
                </div>
            )
        }

        return(
            <div className="container">
                <div className="mt-3">
                    <SearchBar onInput={this.onTermSubmit}/>
                </div>
                <hr className="border-bottom border-white"/>
                    {showData}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);