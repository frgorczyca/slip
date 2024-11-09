import { useGetFormsData } from '@src/services/queries/forms';

import { FormContainer } from '../common';

export function MorningSurvey() {
  const { data } = useGetFormsData();
  console.log(data);

  return (
    <FormContainer title="Morning Survey">
      <div>input1</div>
      <div>input2</div>
      <div>input3</div>
    </FormContainer>
  );
}
