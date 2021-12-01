import Axios from 'axios';

const defaultOption = {
  timeout: 10 * 1000,
  withCredentials: true,
};

export const axios = Axios.create(defaultOption);

axios.defaults.headers.post['Content-Type'] = 'application-json';
axios.interceptors.response.use(response => response.data);
// 相关拦截器
// todo...
