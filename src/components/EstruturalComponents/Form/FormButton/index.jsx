import PropTypes from "prop-types";
import styles from "./FormButton.module.css";

export function FormButton ({
    buttonName, 
    buttonAction, 
    children}){
    return (
        <button className={styles.formButton} onClick={ buttonAction ? buttonAction : null}>
            {children ? children : buttonName}
        </button>
    )
};

FormButton.PropTypes = {
    buttonName: PropTypes.string,
    buttonAction: PropTypes.func,
    children: PropTypes.element
};