import axios from 'axios';

//base url from ngrok, must get new URL every 8 hours
export default axios.create({
  baseURL:'http://287d4b17.ngrok.io'
});
