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

export default {
    get: (route: string) => axios.get(route).then(res => res.data),
    post: (route: string, body?: object, config?: object): Promise<AxiosResponse<any>> => axios.post(route, body, config).then(res => res).catch(e => e.response)
}