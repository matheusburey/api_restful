import * as yup from "yup";

export const userFieldsSchemas = yup.object().shape({
  email: yup.string().email().required(),
  name: yup.string().required(),
});
