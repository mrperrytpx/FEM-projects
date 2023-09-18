import styles from "./SummaryCard.module.css";
import data from "../../data.json";

type TCategoryProps = (typeof data)[number];

const Category = ({ name, icon, score }: TCategoryProps) => {
    return (
        <div className={styles[name]}>
            <div className={styles.group}>
                <img src={icon} />
                <div className="">{name}</div>
            </div>
            <div className={styles.scoreGroup}>
                <span>{score}</span>
                <span> /</span>
                <span>100</span>
            </div>
        </div>
    );
};

export const SummaryCard = () => {
    return (
        <div className={styles.summary}>
            <h2>Summary</h2>
            <div className={styles.categoryWrapper}>
                {data.map((category) => (
                    <Category
                        name={category.name}
                        icon={category.icon}
                        score={category.score}
                        key={category.name}
                    />
                ))}
            </div>
            <button>Continue</button>
        </div>
    );
};
