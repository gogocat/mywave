import {
    render, 
    screen 
} from '@testing-library/react';
import App from './App';

describe('MyWave AI test app', () => {
    it('should renders without crash', () => {
        const {
            asFragment
        } = render(<App />);

        const heading = screen.getByText('Sign Up', { selector: 'h1' });

        expect(heading).toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    });
});
