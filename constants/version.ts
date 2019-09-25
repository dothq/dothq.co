import axios from "axios";

export const latestVersion = (callback: any) => {
  axios.get(`https://edge.dotbrowser.me/version/latest`).then(r => {
    callback(r.data);
  });
};
