/* eslint-disable jsx-a11y/anchor-is-valid */
import {
    Formik, 
    Form,
} from 'formik';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import TextInputField from 'components/TextInputField';
import { 
    signUpFormSchema, 
    signUpFormSchemaInitValues 
} from 'validationSchemas/signUp';

function SignUp() {
    const handleFormSubmit = () => {
        
    };

    return (
        <div className="sign-up-form">
            <Formik 
                initialValues={signUpFormSchemaInitValues}
                validationSchema={signUpFormSchema}
                onSubmit={handleFormSubmit}
            >
                <Form>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="confirmPassword"
                        label="Confirm password"
                        type="password"
                        id="confirmPassword"
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
