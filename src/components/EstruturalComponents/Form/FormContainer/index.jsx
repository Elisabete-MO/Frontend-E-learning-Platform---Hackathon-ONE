import PropTypes from "prop-types";
import styles from "./FormContainer.module.css"

export function FormContainer ({
    formHandle, 
    children}) {
    return (
        <form onSubmit={formHandle} className={styles.formContainer}>
            {children}
        </form>
    );
};

FormContainer.propTypes = {
    formHandle: PropTypes.func,
    children: PropTypes.element.isRequired
};