import './style.css';
import constructionImagePath from './LOGO.png';
import mp4VideoPath from './assemline-robot.mp4'; // Import MP4 format
import webmVideoPath from './assemline-robot.webm'; // Import WebM format

// Create the video element
const videoElement = document.createElement('video');
videoElement.autoplay = true;
videoElement.muted = true;
videoElement.loop = true;
videoElement.playsinline = true; // Ensure inline playback on mobile devices
videoElement.id = 'backgroundVideo';

// Create MP4 source
const mp4Source = document.createElement('source');
mp4Source.src = mp4VideoPath;
mp4Source.type = 'video/mp4';

// Create WebM source
const webmSource = document.createElement('source');
webmSource.src = webmVideoPath;
webmSource.type = 'video/webm';

// Append both sources to the video element
videoElement.appendChild(mp4Source);
videoElement.appendChild(webmSource);

// Append the video element to the body
document.body.appendChild(videoElement);

// Set the image source for the logo
document.querySelector("img").src = constructionImagePath;
