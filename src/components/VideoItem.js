import React from 'react';

import {Grid,Paper, Typography} from '@material-ui/core';


const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <Grid item xs={12}>
            <Paper onClick={() => onVideoSelect(video)} style={{display: 'flex', alignItems: 'center',cursor:'pointer'}}> 
              <img src={video.snippet.thumbnails.default.url} alt='thumbnail' style={{marginRight: '20px',marginBottom:'1em'}}/>  
             <Typography variant='subtitle1'><b>{video.snippet.title}</b></Typography>
            </Paper>
        </Grid>
    )
}


export default VideoItem;