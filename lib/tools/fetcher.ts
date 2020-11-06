import axios from 'axios';

import config from '../../dot.config';

const host = process.env.NODE_ENV == "development" ? config.api.uris.dev() : config.api.uris.prod;

export interface AxiosResponse<T = any>  {
    data: T;
    status: number;
    statusText: string;
    headers: any;
    config: object;
    request?: any;
}

axios.interceptors.response.use((res) => {
    console.log(`🚀 ${res.status} ${res.config.method.toUpperCase()} ${res.config.url}`, res.data)

    return res;
  }, (error) => {
    console.log(`🚀 ${error.response.status} ${error.response.config.method.toUpperCase()} ${error.response.config.url}`, error.response.data)

    return Promise.reject(error);
});

export default {
    get: (route: string) => axios.get(route).then(res => res.data),
    post: (route: string, body?: object, config?: object): Promise<AxiosResponse<any>> => axios.post(route, body, config).then(res => res).catch(e => e.response)
}