import { getUserToken } from "./login";

export const getMe = async () => {
    const res = await fetch('https://dothq.co/api/id.me', { headers: { "Content-Type": "application/json", "Authorization": "Bearer " + getUserToken() } });

    return res.json();
}