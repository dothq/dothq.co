import { getUserToken } from "./login";

export const getMe = async () => {
    if(getUserToken() == "null") return;
    if(getUserToken() == "undefined") return;
    if(getUserToken() == "") return;
    if(getUserToken().length == 0) return;

    const res = await fetch('https://dothq.co/api/id/me', { headers: { "Content-Type": "application/json", "Authorization": "Bearer " + getUserToken() } });

    return res.json();
}
