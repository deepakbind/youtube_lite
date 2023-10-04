import axios from "axios";
const BASE_URL = 'https://youtube138.p.rapidapi.com'
const options = {
    params: {hl: 'en', gl: 'US'},
    headers: {
      'X-RapidAPI-Key': process.env.,
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };