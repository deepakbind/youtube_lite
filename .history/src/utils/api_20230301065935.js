import axios from "axios";
const BASE_URL = 'https://youtube138.p.rapidapi.com'
const options = {
    params: {hl: 'en', gl: 'US'},
    headers: {
      // 'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY,
      'X-RapidAPI-Key': '0bba6220cdmsh5794660bbd9996fp17a2c7jsnd5b5be332f49',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

 export const fetchDataFromApi = async(url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  }