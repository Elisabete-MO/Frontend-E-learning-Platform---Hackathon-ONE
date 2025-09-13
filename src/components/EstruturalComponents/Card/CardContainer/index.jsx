import PropTypes from "prop-types";
import styles from "./CardContainer.module.css";


export function CardContainer({children, ...rest}){

    return (
        <div className={styles.CardContainer} {...rest}>
            {children}
        </div>
    );
};

CardContainer.propTypes = {
    children: PropTypes.element.isRequired
};