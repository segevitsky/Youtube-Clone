import React, {Component} from 'react';
import { Grid } from '@material-ui/core';

import  {SearchBar, VideoList,VideoDetail} from './components/';

const API_KEY = process.env.REACT_APP_API_KEY;
const url =  'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&key=';

class App extends Component {
    state = {
        videos: [],
        selectedVideo: null,
    }

    componentDidMount() {
        this.handleSubmit('simpsons')
    }

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    handleSubmit = async (searchTerm) => {
        const res = await fetch(`${url}${API_KEY}&q=${searchTerm}`)
        let searchedVideos = await res.json();
        searchedVideos = searchedVideos.items

        this.setState({ videos: searchedVideos, selectedVideo: searchedVideos[0] })
    }

    render() {
        const {videos, selectedVideo} = this.state
        return (
            <Grid style={{ justifyContent: "center" }} container spacing={10}>
            <Grid item xs={11}>
              <Grid container spacing={10}>
                <Grid item xs={12}>
                  <SearchBar onFormSubmit={this.handleSubmit}/>
                </Grid>
                <Grid item xs={8}>
                  <VideoDetail video={selectedVideo} />
                </Grid>
                <Grid item xs={4}>
                  <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
            )
    }
}


export default App;