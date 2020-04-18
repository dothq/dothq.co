import axios from 'axios';

export const loginWithCredentials = ({ email, password }) => {
    axios.post('https://api.dothq.co/id.login', { email, password })
        .then(res => {
            return res.data;
        })
}