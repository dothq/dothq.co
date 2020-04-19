import { getUserToken } from "./login";

export const getMe = async () => {
    const res = await fetch('https://cors-anywhere.herokuapp.com/https://api.dothq.co/id.me', { headers: { "Content-Type": "application/json", "Authentication": "Bearer " + getUserToken() } });

    return res.json();
}