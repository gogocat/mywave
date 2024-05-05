import React from 'react';

interface IProps {
    fallback?: any;
    children?: any;
}

interface IState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch() {
        // Example "componentStack":
        //   in ComponentThatThrows (created by App)
        //   in ErrorBoundary (created by App)
        //   in div (created by App)
        //   in App
        // logErrorToMyService(error, info.componentStack);
    }

    render() {
        // eslint-disable-next-line object-curly-newline
        const { fallback = null, children = null } = this.props;

        if (this.state.hasError) {
            // You can render any custom fallback UI
            return fallback;
        }

        return children;
    }
}

export default ErrorBoundary;
