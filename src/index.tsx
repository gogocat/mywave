import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import {
    createTheme, 
    ThemeProvider 
} from '@mui/material/styles';
import ErrorBoundary from 'components/ErrorBoundary';
import App from 'components/App/App';
import ErrorScreen from 'components/ErrorScreen';
import reportWebVitals from './reportWebVitals';

const defaultTheme = createTheme();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <ErrorBoundary fallback={ErrorScreen}>
        <CssBaseline />
        <ThemeProvider theme={defaultTheme}>
            <App />
        </ThemeProvider>
    </ErrorBoundary>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
