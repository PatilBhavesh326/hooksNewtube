import axios from "axios";

const KEY = 'AIzaSyCpHbz-8zDGc-gOcXs2fj2_iuWOnmzxReI';

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params :{
      part:'snippet',
      type:'video',
      maxResults:15,
      key:KEY
  }  
});