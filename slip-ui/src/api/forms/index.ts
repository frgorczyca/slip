import { apiClientManager } from '../core/apiClientManager';

export const getFormValues = async () => {
  const response = await apiClientManager.getClient().get('/api/form');

  return response.data;
};
