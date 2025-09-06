import PropTypes from "prop-types";
import styles from "./ExternalContainer.module.css";

export function ExternalDoubleContainer ({children}) {
    return (
        <main className={styles.externalDouble}>
            {children}
        </main>
    );
};

ExternalDoubleContainer.propType = {
    children: PropTypes.element
};

export function ExternalContainer ({children}) {
    return (
        <main className={styles.external}>
            {children}
        </main>
    );
};


ExternalContainer.propType = {
    children: PropTypes.element
};