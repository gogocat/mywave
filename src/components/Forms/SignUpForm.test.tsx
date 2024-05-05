import {
    render, 
    screen 
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import services from 'services';
import SignUp from './SignUpForm';


describe('Sing Up screen', () => {
    it('should renders Sing Up form', () => {
        const {
            asFragment
        } = render(<SignUp />);

        const userNameField = screen.getByLabelText('Email Address');
        const passwordField = screen.getByLabelText('Password');
        const confirmPasswordField = screen.getByLabelText('Confirm password');
        const submitButton = screen.getByText('Sign Up', { selector: 'button' });

        expect(userNameField).toBeInTheDocument();
        expect(passwordField).toBeInTheDocument();
        expect(confirmPasswordField).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    });

    it('should validate email field', async()=> {
        const user = userEvent.setup();

        render(<SignUp />);

        const userNameField: HTMLInputElement = screen.getByLabelText('Email Address');

        // assert invaid email address
        await user.type(userNameField, 'abc');
        await userEvent.click(document.body);

        expect(userNameField.value).toBe('abc');
        expect(await screen.findByText('email must be a valid email')).toBeInTheDocument();

        // assert valid email address
        await user.type(userNameField, 'abc@abc.com');
        await userEvent.click(document.body);

        expect(await screen.queryByText('email must be a valid email')).not.toBeInTheDocument();
    });

    it('should validate password field', async()=> {
        const user = userEvent.setup();

        render(<SignUp />);

        const VALID_PASSWORD = '#A3';
        
        const passwordField: HTMLInputElement = screen.getByLabelText('Password');
        const confirmPasswordField: HTMLInputElement = screen.getByLabelText('Confirm password');

        // assert invaid password address
        await user.type(passwordField, '1');
        await userEvent.click(document.body);

        expect(passwordField.value).toBe('1');
        expect(await screen.findByText('Must at least 3 characters')).toBeInTheDocument();

        await user.clear(passwordField);
        await user.type(passwordField, 'abc');
        await userEvent.click(document.body);

        expect(passwordField.value).toBe('abc');
        expect(await screen.findByText('Must contain at least one uppercase')).toBeInTheDocument();

        await user.clear(passwordField);
        await user.type(passwordField, 'Abc');
        await userEvent.click(document.body);
        expect(await screen.findByText('Must contain at least one number')).toBeInTheDocument();

        await user.clear(passwordField);
        await user.type(passwordField, 'A2c');
        await userEvent.click(document.body);
        expect(await screen.findByText('Must contain at least one special character')).toBeInTheDocument();

        await user.clear(passwordField);
        await user.type(passwordField, VALID_PASSWORD);
        await userEvent.click(document.body);

        // assert pasword is valid
        const muiErrorCss = passwordField.closest('div');
        expect(muiErrorCss?.classList?.contains('Mui-error')).toBe(false);

        // assert confirm password field
        await user.type(confirmPasswordField, '123');
        await userEvent.click(document.body);
        expect(await screen.findByText('Passwords must match')).toBeInTheDocument();

        await user.clear(confirmPasswordField);
        await user.type(confirmPasswordField, VALID_PASSWORD);
        await userEvent.click(document.body);
        expect(await screen.queryByText('Passwords must match')).not.toBeInTheDocument();
        expect(confirmPasswordField.value).toBe(passwordField.value);
    });

    it('should submit a vaid form', async()=> {
        const spySignUpService = jest.spyOn(services, 'signUpService');

        const user = userEvent.setup();

        render(<SignUp />);

        const VALID_VALUES = {
            userName: 'test@test.com',
            password: 'A1#',
        };

        const userNameField: HTMLInputElement = screen.getByLabelText('Email Address');
        const passwordField: HTMLInputElement = screen.getByLabelText('Password');
        const confirmPasswordField: HTMLInputElement = screen.getByLabelText('Confirm password');
        const submitButton = screen.getByText('Sign Up', { selector: 'button' });

        await user.type(userNameField, VALID_VALUES.userName);
        await user.type(passwordField, VALID_VALUES.password);
        await user.type(confirmPasswordField, VALID_VALUES.password);
        await userEvent.click(submitButton);

        expect(spySignUpService).toHaveBeenCalledTimes(1);
        expect(spySignUpService).toHaveBeenCalledWith({
            email: VALID_VALUES.userName, 
            password: VALID_VALUES.password,
            confirmPassword: VALID_VALUES.password,
        });

    });
});
