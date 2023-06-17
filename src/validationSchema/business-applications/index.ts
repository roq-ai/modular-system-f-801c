import * as yup from 'yup';

export const businessApplicationValidationSchema = yup.object().shape({
  name: yup.string().required(),
  configuration: yup.string().required(),
  organization_id: yup.string().nullable(),
});
