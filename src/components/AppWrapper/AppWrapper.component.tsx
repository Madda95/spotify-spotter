import React, { ReactNode } from "react";
import styles from "./appWrapper.module.scss";

interface IAppWrapperProps {
    children: ReactNode;
}

const AppWrapper: React.FC<IAppWrapperProps> = ({ children }) => {
    return <div className={styles.wrapper}>{children}</div>;
};

export default AppWrapper;
