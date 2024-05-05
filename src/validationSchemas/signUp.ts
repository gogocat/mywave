import * as yup from 'yup';
import {
    REQUIRED_FIELD, 
    EMAIL_ERROR 
} from 'constants/index';

const passwordValidationRule = yup.string()
    .min(3, 'Must at least 3 characters')
    .required(REQUIRED_FIELD)
    .matches(
        /^(?=.*[A-Z])/,
        '  Must contain at least one uppercase'
    )
    .matches(
        /^(?=.*[0-9])/,
        '  Must contain at least one number'
    )
    .matches(
        /^(?=.*[\W])/,
        '  Must contain at least one special character'
    );
  
// sign up form schema
export const signUpFormSchema = yup.object({
    email: yup.string().email().required(EMAIL_ERROR),
    password: passwordValidationRule,
    confirmPassword: passwordValidationRule.test('passwords-match', 'Passwords must match', function passwordsMatch(value){
        return this.parent.password === value;
    }),
});

// sign up form initial values
export const signUpFormSchemaInitValues = {
    email: '',
    password: '',
    confirmPassword: '',
};
