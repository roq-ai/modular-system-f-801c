import axios from 'axios';
import queryString from 'query-string';
import { BusinessApplicationInterface, BusinessApplicationGetQueryInterface } from 'interfaces/business-application';
import { GetQueryInterface } from '../../interfaces';

export const getBusinessApplications = async (query?: BusinessApplicationGetQueryInterface) => {
  const response = await axios.get(`/api/business-applications${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createBusinessApplication = async (businessApplication: BusinessApplicationInterface) => {
  const response = await axios.post('/api/business-applications', businessApplication);
  return response.data;
};

export const updateBusinessApplicationById = async (id: string, businessApplication: BusinessApplicationInterface) => {
  const response = await axios.put(`/api/business-applications/${id}`, businessApplication);
  return response.data;
};

export const getBusinessApplicationById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(
    `/api/business-applications/${id}${query ? `?${queryString.stringify(query)}` : ''}`,
  );
  return response.data;
};

export const deleteBusinessApplicationById = async (id: string) => {
  const response = await axios.delete(`/api/business-applications/${id}`);
  return response.data;
};
