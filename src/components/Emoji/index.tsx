import * as RER from "react-emoji-render";
 
export const Emoji = ({ emoji }) => {
  const options = {
    baseUrl: "https://cdn.jsdelivr.net/gh/iamcal/emoji-data/img-apple-160/",
    ext: ("png" as any),
  };
 
  return <RER.Emoji options={options} text={emoji} />;
}