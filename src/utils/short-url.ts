import axios from 'axios';
import { shortUrl } from './types';

/**
 * @param {shortUrl} schema
 * Create short url 
 * @example  makeShortUrl({
      url: 'https://chzapps.com',
      provider: 'is.gd',
    }) => "https://is.gd/6ycptD"
 * */
export const makeShortUrl = async (schema: shortUrl) => {
  const provider = schema?.provider;
  if (provider) {
    const baseUrl =
      provider === 'cdpt.in'
        ? 'https://cdpt.in/shorten?url='
        : 'https://is.gd/create.php?format=simple&url=';
    const call = await axios.get(baseUrl + schema.url);
    return call.data
  } else {
    console.warn('Please choose valid short url provider')
  }
};
