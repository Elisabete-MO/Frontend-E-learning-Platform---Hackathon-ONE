import PropTypes from "prop-types";
import styles from "./ExternalContainer.module.css";

export function ExternalDoubleContainer ({children}) {
    return (
        <main className={styles.externalDouble}>
            {children}
        </main>
    );
};

ExternalDoubleContainer.propTypes = {
    children: PropTypes.element.isRequired
};

export function ExternalContainer ({children}) {
    return (
        <main className={styles.external}>
            {children}
        </main>
    );
};


ExternalContainer.propTypes = {
    children: PropTypes.element.isRequired
};