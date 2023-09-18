import styles from "./Container.module.css";

type TContainerProps = {
    children: JSX.Element | JSX.Element[];
};

export const Container = ({ children }: TContainerProps) => {
    return <div className={styles.container}>{children}</div>;
};
