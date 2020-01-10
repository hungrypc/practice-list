import axios from 'axios';

const KEY = 'AIzaSyAKpV6Oi61txS4j4EcLEP46V94ZZaGWczE'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
