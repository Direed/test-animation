import styles from './styles.module.css';

const ScrollToTop = ({isToTop, handleClick}) => {

    return (
        <div className={`${styles.button} ${isToTop && styles.top}`} onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
                <path d="M7 1L13 7M7 1L1 7M7 1V15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path xmlns="http://www.w3.org/2000/svg" d="M7 1L13 7M7 1L1 7M7 1V15" stroke="url(#paint0_linear_2566_952)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <defs xmlns="http://www.w3.org/2000/svg">
                    <linearGradient id="paint0_linear_2566_952" x1="-2.01899" y1="5.45455" x2="16.4269" y2="10.0481" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#963488"/>
                        <stop offset="0.495" stopColor="#FC6F32"/>
                        <stop offset="1" stopColor="#FF4A59"/>
                    </linearGradient>
                </defs>
            </svg>
        </div>
    )
}

export default ScrollToTop;