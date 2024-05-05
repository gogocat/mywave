import * as yup from 'yup';
import {
    REQUIRED_FIELD, 
    EMAIL_ERROR 
} from 'constants/index';

// sign up form schema
export const signUpFormSchema = yup.object({
    email: yup.string().email().required(EMAIL_ERROR),
    password: yup.string().required(REQUIRED_FIELD),
    confirmPassword: yup.string().required(REQUIRED_FIELD),
});

// sign up form initial values
export const signUpFormSchemaInitValues = {
    email: '',
    password: '',
    confirmPassword: '',
};
