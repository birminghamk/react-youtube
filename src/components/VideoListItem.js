import React from 'react';

const VideoListItem = ({ video, videoSelect }) => {
	return (
		<li onClick={ () => videoSelect(video)}>
			<img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} style={{ borderBottom: "2px solid red" }}/>
			<h5>{video.snippet.title}</h5>
		</li>
	) 
}

export default VideoListItem;