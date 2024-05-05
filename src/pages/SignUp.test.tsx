import {
    render, 
    screen 
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignUp from 'pages/SignUp';

describe('Sing Up screen', () => {
    it('should render signup form', ()=>{
        const {
            asFragment
        } = render(<SignUp />);

        const heading = screen.getByText('Sign Up', { selector: 'h1' });
        const successHeading = screen.queryByText('Success!', { selector: 'h3' });

        expect(heading).toBeInTheDocument();
        expect(successHeading).not.toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    });

    it('should submit signup form', async()=> {
        const user = userEvent.setup();

        const {
            asFragment
        } = render(<SignUp />);

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

        const successHeading = await screen.findByText('Success!', { selector: 'h3' });
        
        expect(successHeading).toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    });
});