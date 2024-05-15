import styles from './styles.module.css';

const Button = ({
                    children,
                    isTransparent = false,
                    size = 'big',
                    handleClick
}) => {
    const className = ` ${styles.button} ${isTransparent ? styles.transparent : ''} ${styles[size]} `

    return (
        <button className={className} onClick={handleClick}>
            {children}
        </button>
    )
}

export default Button;
