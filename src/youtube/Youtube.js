import React, { Component } from 'react';
import YTSearchBar from './YTSearchBar';
import youtubeAPI from './apis/youtubeAPI';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import '../style/youtube.css';

class Youtube extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        }
    };

    componentDidMount() {
        this.onFormSubmit('buildings')
    }

    onFormSubmit = async (term) => {
        const response = await youtubeAPI
            .get('/search', {
                params: {
                    q: term,
                    part: 'snippet',
                    type: 'video',
                    maxResults: 5,
                    key: 'AIzaSyAKpV6Oi61txS4j4EcLEP46V94ZZaGWczE'
                }
            });

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    };

    onVideoSelect = (video) => {
        this.setState({
            selectedVideo: video
        })
    }


    render() {
        return (
            <div className="ui container">
                <YTSearchBar onFormSubmit={this.onFormSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Youtube;