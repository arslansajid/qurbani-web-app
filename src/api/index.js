import Config from './config';
import axiosInstance from './api.config';
import axios from 'axios';

export const contactUs = async userData => {
  try {
    const res = await axiosInstance.post(
      `${Config.API_END_POINT}/httpsContactUs/api/${Config.API_VERSION}/contactUs`, userData
    );
    return res;
  } catch (err) {
    throw err.response;
  }
};

export const subscribeNewsLetter = async userData => {
  try {
    const res = await axiosInstance.post(
      `${Config.API_END_POINT}/httpsNewsLetters/api/${Config.API_VERSION}/newsLetters`, userData
    );
    return res;
  } catch (err) {
    throw err.response;
  }
};

export const getYoutubeVideos = async () => {
  try {
    let videos = [];
    const uploadsId = await axios.get(`https://www.googleapis.com/youtube/v3/channels?id=${Config.YOUTUBE_CHANNEL_ID}&key=${Config.YOUTUBE_API_KEY}&part=contentDetails`);
    if (!!uploadsId) {
      videos = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${uploadsId}&key=${Config.YOUTUBE_API_KEY}&part=snippet&maxResults=50`)
    }
    return videos;
  } catch (err) {
    throw err.response;
  }
};