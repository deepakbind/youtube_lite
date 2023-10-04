import axios from "axios";
const BASE_URL = 'https://youtube138.p.rapidapi.com'
const options = {
    params: {hl: 'en', gl: 'US'},
    headers: {
      // 'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY,
      // 'X-RapidAPI-Key': '63fbd6d704mshaceeb7f09200ab1p10dd8fjsnc5c94eaca95f',
      'X-RapidAPI-Key':  '96c59f3f6amsh238619d947de2b6p1f8d4djsn213bdde19e3c',,
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

 export const fetchDataFromApi = async(url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  }