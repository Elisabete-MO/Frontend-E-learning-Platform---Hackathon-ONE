import PropTypes from "prop-types";
import styles from "./FieldsetContainer.module.css";

export function FieldsetContainer ({fieldsetName, children}) {
    return (
        <fieldset className={styles.fieldsetContainer}>
            <legend>{fieldsetName}</legend>
            {children}
        </fieldset>
    )
};

FieldsetContainer.propTypes = {
    fieldsetName: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
};