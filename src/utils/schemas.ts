import * as yup from 'yup';

export const createRestaurantSchemema = yup.object().shape({
  name: yup.string().required('Name is a required field'),
  cnpj: yup.string().required('CNPJ is a required field'),
  segment: yup.string().required('Segment is a required field')
});
