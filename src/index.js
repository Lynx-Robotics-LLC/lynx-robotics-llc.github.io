import './style.css';
import constructionImagePath from './LOGO.png'
import videoPath from './assemline-robot.mp4';  // Import video using Webpack's bundling

const videoElement = document.createElement('video');
videoElement.autoplay = true;
videoElement.muted = true;
videoElement.loop = true;
videoElement.id = 'backgroundVideo';

const source = document.createElement('source');
source.src = videoPath;
source.type = 'video/mp4';

videoElement.appendChild(source);
document.body.appendChild(videoElement);

document.querySelector("img").src = constructionImagePath;
