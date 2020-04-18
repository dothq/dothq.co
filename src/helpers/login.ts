import axios from 'axios';

export const loginWithCredentials = async ({ email, password }) => {
    const res = await fetch('https://cors-anywhere.herokuapp.com/https://api.dothq.co/id.login', { body: JSON.stringify({ email, password }), method: 'POST' });

    return res.json();
}