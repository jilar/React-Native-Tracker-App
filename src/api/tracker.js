import axios from 'axios';

//base url from ngrok, must get new URL every 8 hours
export default axios.create({
  baseURL:'http://6d66e077.ngrok.io'
});
