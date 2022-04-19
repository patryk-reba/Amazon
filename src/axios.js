import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "https://us-central1-clone-f512b.cloudfunctions.net/api", //THE API (cloud function) URL

  //"http://localhost:5001/clone-f512b/us-central1/api"  
});

export default instance;
