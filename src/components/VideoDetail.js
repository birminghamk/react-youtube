import React, { Fragment } from 'react';
import { Form, FormGroup, Input } from 'reactstrap';

const VideoDetail = ({ selectedVideo }) => {

	if (!selectedVideo) {
		return <div>Loading...</div>
	}

	const videoId = selectedVideo.id.videoId; 
	const videoUrl = `https://www.youtube.com/embed/${videoId}`;

	return (
		<Fragment>
			<div className="embed-responsive embed-responsive-16by9">
  				<iframe style={{ borderBottom: "2px solid white" }} className="embed-responsive-item" src={videoUrl} title={selectedVideo.snippet.title} allowFullScreen></iframe>
			</div>
			<h2>{selectedVideo.snippet.title}</h2>
			<p>{selectedVideo.snippet.description}</p>
		</Fragment>
	)
}

export default VideoDetail;