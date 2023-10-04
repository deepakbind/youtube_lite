import axios from "axios";
const BASE_URL = 'https://youtube138.p.rapidapi.com'
const options = {
    params: {hl: 'en', gl: 'US'},
    headers: {
      // 'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY,
      'X-RapidAPI-Key': '1e3f6ec595msh9940f1933f24bd5p1b5193jsn8e14cd7641df',,
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

 export const fetchDataFromApi = async(url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  }