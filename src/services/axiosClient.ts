import axios from 'axios'

 const axiosSetup: any = (token = "") => {
  const defaultOptions = {
    headers: {
      Authorization: token ? `Token ${token}` : ''
    },
  };

  return {
    get: (url: string, options = {}) => axios.get(url, { ...defaultOptions, ...options }),
    post: (url: string, data: any, options = {}) => axios.post(url, data, { ...defaultOptions, ...options }),
    patch: (url: string, data: any, options = {}) => axios.patch(url, data, { ...defaultOptions, ...options }),
    delete: (url: string, options = {}) => axios.delete(url, { ...defaultOptions, ...options })
  };
};

export const axiosClient = axiosSetup();
