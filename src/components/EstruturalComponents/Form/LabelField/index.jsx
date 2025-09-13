import PropTypes from "prop-types";
import styles from "./LabelField.module.css";

export function LabelField({
    labelName, 
    isCheckInput = false, 
    children}) {
    return (
        <label className={isCheckInput ? styles.labelCheckLayer : styles.labelLayer} >
            <p className={isCheckInput ? styles.labelCheckLayerName : null}>
                {labelName}
            </p>
            {children}
        </label>
    )
};

LabelField.propTypes = {
    labelName: PropTypes.string.isRequired,
    isCheckInput: PropTypes.bool,
    children: PropTypes.element.isRequired
};