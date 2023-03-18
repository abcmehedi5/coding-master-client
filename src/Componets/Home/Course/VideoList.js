import React from 'react';

const VideoList = ({video,setVideoId}) => {
    console.log(video.videoId);
    return (
        <div>
            <li className='bg-secondary m-2 p-2 rounded videoTitleLi' onClick={()=>setVideoId(video.videoId)}>{video.videoTitle}</li>
        </div>
    );
};

export default VideoList;


