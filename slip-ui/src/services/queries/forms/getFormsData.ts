import { getFormValues } from '@src/api/forms';
import { useQuery } from 'react-query';

const keys = {
  all: ['forms'] as const,
  formData: ['forms', 'data'] as const,
};

export const useGetFormsData = () => {
  return useQuery({
    queryKey: keys.formData,
    queryFn: getFormValues,
  });
};
