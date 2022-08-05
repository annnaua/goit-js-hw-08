// Add imports
import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

// INITIALIZATION

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const VIDEOPLAYER_CURRENT_TIME = 'videoplayer-current-time';
const savedCurrentTime = localStorage.getItem(VIDEOPLAYER_CURRENT_TIME);

// FUNCTIONS

const onPlay = function ({ seconds }) {
  // console.log(seconds);
  localStorage.setItem(VIDEOPLAYER_CURRENT_TIME, seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));
player.setCurrentTime(savedCurrentTime);
