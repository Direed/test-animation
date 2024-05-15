import React from "react";
import styles from './styles.module.css'

const BoardRow = ({data}) => {
    const {
        number,
        ranking,
        modelName,
        average,
        arc,
        hellaSwag,
        mmlu,
        truthfulQa,
        winogrande,
        gsm8k,
        usage
    } = data;

    return (
        <div className={`${styles.row} ${number % 2 ? '' : styles.transparent}`}>
            <img alt={'ranking'} src={`/images/ranking_${ranking}.svg`}/>
            <p className={styles.number}>{number}</p>
            <p className={styles.modelName}>{modelName}</p>
            <p>{average}</p>
            <p>{arc}</p>
            <p>{hellaSwag}</p>
            <p>{mmlu}</p>
            <p>{truthfulQa}</p>
            <p>{winogrande}</p>
            <p>{gsm8k}</p>
            <p>{usage}</p>
        </div>
    )
}

export default BoardRow;