import * as yup from 'yup';

const schema = yup.object().noUnknown().shape({
  id: yup.string().required('id is required').typeError('Invalid id was provided'),
  name: yup.string().required('name is required').max(100, 'name must be less than ${max} characters long').typeError('Invalid title was provided'),
  address: yup.string().required('address is required').max(400, 'address must be less than ${max} characters long').typeError('Invalid address was provided'),
  description: yup.string().required('site must have a description').typeError('Invalid description was provided'),
  longitude: yup.number().required('site must have a longitude'),
  latitude: yup.number().required('site must have a latitude'),
  contactName: yup.string().required('contactName is required').max(100, 'contact name must be less than ${max} characters long').typeError('Invalid contact name was provided'),
  contactNumber: yup.string().required('contactNumber is required').max(12, 'contact number must be less than ${max} characters long').typeError('Invalid contact number was provided'),
});

export default schema;
