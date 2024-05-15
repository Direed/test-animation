import styles from './styles.module.css';

const StatBlock = ({title, description}) => {
    return (
        <div className={styles.block}>
            <p className={styles.title}>{title}</p>
            <p className={styles.description}>{description}</p>
        </div>
    )
}

export default StatBlock;