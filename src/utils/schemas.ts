import * as yup from 'yup';

export const createRestaurantSchemema = yup.object().shape({
  name: yup.string().required('Name is a required field'),
  cnpj: yup
    .string()
    .required('CNPJ is a required field')
    .min(14, 'CNPJ must be equal to 14 characters')
    .max(14, 'CNPJ must be equal to 14 characters'),
  segment: yup.string().required('Segment is a required field')
});

export const checkScheduleSchema = yup.object().shape({
  date: yup.date().required('Date is required').typeError('Date is required'),
  opening_time: yup
    .string()
    .required('From is required')
    .test(
      'from-less-than-to',
      'From hour must be less than To hour',
      function (value) {
        const { closing_time } = this.parent;
        if (!value || !closing_time) return true;
        const fromTime = value.split(':').map(Number);
        const toTime = closing_time.split(':').map(Number);
        return (
          fromTime[0] < toTime[0] ||
          (fromTime[0] === toTime[0] && fromTime[1] < toTime[1])
        );
      }
    ),
  closing_time: yup.string().required('To is required'),
  restaurant_id: yup.string().required('A restaurant is required')
});

export const createScheduleSchema = yup.object().shape({
  day_of_week: yup.number().required('Day of the week is required'),
  opening_time: yup
    .string()
    .required('From is required')
    .test(
      'from-less-than-to',
      'From hour must be less than To hour',
      function (value) {
        const { closing_time } = this.parent;
        if (!value || !closing_time) return true;
        const fromTime = value.split(':').map(Number);
        const toTime = closing_time.split(':').map(Number);
        return (
          fromTime[0] < toTime[0] ||
          (fromTime[0] === toTime[0] && fromTime[1] < toTime[1])
        );
      }
    ),
  closing_time: yup.string().required('To is required')
});
