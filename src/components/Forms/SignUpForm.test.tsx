import {
    render, 
    screen 
} from '@testing-library/react';
import SignUp from './SignUpForm';

describe('Sing Up screen', () => {
    it('should renders Sing Up form', () => {
        const {
            asFragment
        } = render(<SignUp />);

        const userNameField = screen.getByLabelText('Email Address *');
        const passwordField = screen.getByLabelText('Password *');
        const confirmPasswordField = screen.getByLabelText('Confirm password *');
        const submitButton = screen.getByText('Sign Up', { selector: 'button' });

        expect(userNameField).toBeInTheDocument();
        expect(passwordField).toBeInTheDocument();
        expect(confirmPasswordField).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
        // expect(asFragment()).toMatchSnapshot();
    });
});
