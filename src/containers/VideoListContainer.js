import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

var VideoListContainer = () => {};

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

const mapStateToProps = state => {
  console.log('videoList render ran.');
  return {
    videos: state.videoList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleVideoListEntryTitleClick: video => {console.log("handleVideoListEntryTitleClick ran."); return dispatch(changeVideo(video))}
  }
}

VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(VideoList);

export default VideoListContainer;
