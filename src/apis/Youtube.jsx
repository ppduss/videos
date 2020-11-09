import axios from 'axios';

const KEY = 'AIzaSyCkHysYuKtER3AI8AufJF2t2nn0Xbx0kIs';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});

