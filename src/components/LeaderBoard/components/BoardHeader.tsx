import styles from "./styles.module.css";

const BoardHeader = ({headers}) => {
    return (
        <div className={styles.header}>
            {headers.map((header) => (<p
                key={header}
                className={`${header === '#' && styles.number} ${header === 'Model Name' && styles.modelName}`}
            >{header}</p>))}
        </div>
    )
}

export default BoardHeader;