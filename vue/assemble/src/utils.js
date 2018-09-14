import axios from 'axios'



const base = '/api';
const $ajax = axios.create({
  baseURL: base,
  timeout: 15000
});
const ajaxPost = (api, data = null) => $ajax.post(api, qs.stringify(data));
const ajaxGet = (api, data = null) => $ajax.get(api, { params: {...data, '_': new Date().getTime() } });
const jsonPost = (api, data = null) => $ajax.post(api, data);

export {
  ajaxPost,
  ajaxGet,
  jsonPost
}