import axios from 'axios';

export const loginWithCredentials = async ({ email, password }) => {
    const res = await fetch('http://localhost:4000/api/id.login', { body: JSON.stringify({ email, password }), method: 'POST', headers: { "Content-Type": "application/json" } });

    return res.json();
}

export const isBrowser = () => typeof window !== "undefined"

export const getUserToken = () =>
  isBrowser() && window.localStorage.getItem("token")
    ? window.localStorage.getItem("token")
    : ''

export const setToken = token =>
  window.localStorage.setItem("token", token)