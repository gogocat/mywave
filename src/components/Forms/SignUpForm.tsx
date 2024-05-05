
import {
    useState,
    Dispatch, 
    SetStateAction
} from 'react';
import {
    Formik, 
    Form,
} from 'formik';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import TextInputField from 'components/TextInputField';
import { 
    signUpFormSchema, 
    signUpFormSchemaInitValues 
} from 'validationSchemas/signUp';
import services from 'services';

import { ISignUpFormValues } from 'interfaces';

interface ISignUpFormProps {
    onCompleted?: Dispatch<SetStateAction<boolean>>;
};

function SignUpForm(props: ISignUpFormProps) {
    const {
        onCompleted = ()=>{},
    } = props;

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword(!showPassword);

    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    const handleFormSubmit = (values: ISignUpFormValues) => {
        services.signUpService(values);
        onCompleted(true);
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
                        autoComplete="off"
                        type={showPassword ? "text" : "password"}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                    <TextInputField
                        label="Confirm password"
                        name="confirmPassword"
                        autoComplete="off"
                        type={showPassword ? "text" : "password"}
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

export default SignUpForm;
