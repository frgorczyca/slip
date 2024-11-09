import { Indicator } from './types';
import { apiClientManager } from '../core/apiClientManager';

export const getFormValues = async () => {
  const response = await apiClientManager
    .getClient()
    .get<Indicator[]>('/forms');

  return response.data;
};
