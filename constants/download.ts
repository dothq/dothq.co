import axios from "axios";

export const downloadDot = (type: string, os: string) => {
  axios.get(`https://edge.dotbrowser.me/${type}/download/${os}`).then(r => {
    if (r.status == 200) return (window.location.href = r.data);
  });
};
