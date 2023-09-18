import styles from "./ResultCard.module.css";
import data from "../../data.json";

export const ResultCard = () => {
    const result = Math.round(data.reduce((a, b) => a + b.score, 0) / 4);

    return (
        <div className={styles.result}>
            <h1>Your result</h1>
            <div className={styles.circle}>
                <p className={styles["big-number"]}>{result}</p>
                <p>of 100</p>
            </div>
            <div>
                <p className={styles.adjective}>Great</p>
                <p>
                    You scored higher than 65% of the people who have taken
                    these tests.
                </p>
            </div>
        </div>
    );
};
