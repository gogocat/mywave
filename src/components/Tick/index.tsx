import './Tick.scss';

interface ITickProps {
    className?: string;
    size?: 'sm' | 'md' | 'lg';
}

function Tick(props: ITickProps) {
    const {
        className = '',
        size = 'sm',
    } = props;

    const sizeCss = `tick--${size}`;
    const classNames = `tick ${sizeCss} ${className}`.trim();

    return (
        <div className={classNames}>
            <svg
                className="checkmark"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 52 52"
                aria-hidden
            >
                <circle className="checkmark__circle"
                    cx="26"
                    cy="26"
                    r="25"
                    fill="none" />
                <path
                    className="checkmark__check"
                    fill="none"
                    d="M14.1 27.2l7.1 7.2 16.7-16.8"
                />
            </svg>
        </div>
    );
}

export default Tick;
