import axios, { AxiosResponse } from 'axios';

export const getSaladsList = () => {
  return axios.get(`${process.env.REACT_APP_API_URL}/salads/`);
};

export const getSaladById = (id: string) => {
  return axios.get(`${process.env.REACT_APP_API_URL}/salads/${id}`);
};
