import axios from 'axios';

//base url from ngrok, must get new URL every 8 hours
export default axios.create({
  baseURL:'http://4f1ed769.ngrok.io'
});
