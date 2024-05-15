import React, {ReactNode} from "react";

import styles from './styles.module.css';

type IProps = {
    children: ReactNode;
    isTransparent?: boolean;
    size?: string;
    handleClick?: () => void;
}

const Button = ({
                    children,
                    isTransparent = false,
                    size = 'big',
                    handleClick
}: IProps) => {
    const className = ` ${styles.button} ${isTransparent ? styles.transparent : ''} ${styles[size]} `

    return (
        <button className={className} onClick={handleClick}>
            {children}
        </button>
    )
}

export default Button;
