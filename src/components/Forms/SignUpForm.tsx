import {
    Formik, 
    Form,
} from 'formik';
import Button from '@mui/material/Button';
import TextInputField from 'components/TextInputField';
import { 
    signUpFormSchema, 
    signUpFormSchemaInitValues 
} from 'validationSchemas/signUp';

import { ISignUpFormValues } from 'interfaces';

function SignUp() {
    const handleFormSubmit = (values: ISignUpFormValues) => {
        // eslint-disable-next-line no-console
        console.log('submit form: ', values);
    };

    return (
        <div className="sign-up-form">
            <Formik 
                initialValues={signUpFormSchemaInitValues}
                validationSchema={signUpFormSchema}
                onSubmit={handleFormSubmit}
            >
                <Form>
                    <TextInputField
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                    />
                    <TextInputField
                        label="Password"
                        name="password"
                    />
                    <TextInputField
                        label="Confirm password"
                        name="confirmPassword"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                </Form>
            </Formik>
        </div>
    );
}

export default SignUp;
