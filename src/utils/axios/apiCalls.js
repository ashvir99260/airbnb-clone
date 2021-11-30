import axios from 'axios';

const defaultConfig = {};

export const getData = ({ url, params, cancelToken }) => {
  const options = {
    method: 'GET',
    params,
    url,
    cancelToken,
    ...defaultConfig
  };
  return axios(options);
};

export const postData = ({ url, body }, config = defaultConfig) => axios.post(url, body, config);

export const putData = ({ url, body }, config = defaultConfig) => axios.put(url, body, config);

export const deleteData = (url, data, config = defaultConfig) =>
  axios.delete(url, { data, ...config });

export const patchData = ({ url, body }, config = defaultConfig) => axios.patch(url, body, config);
