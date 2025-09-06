import PropTypes from "prop-types";
import styles from "./ExternalContainer.module.css";

export function ExternalDoubleContainer ({children}) {
    return (
        <main className={styles.external-double}>
            {children}
        </main>
    );
};



export function ExternalContainer ({children}) {
    return (
        <main className={styles.external}>
            {children}
        </main>
    );
};

ExternalDoubleContainer.propType, ExternalContainer.propType = {
    children: PropTypes.element
};