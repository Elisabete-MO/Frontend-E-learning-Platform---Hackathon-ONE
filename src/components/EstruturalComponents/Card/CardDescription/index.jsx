import PropTypes from "prop-types";
import styles from "./CardDesciption.module.css";

export function CardDesciption({description}){
    return (
        <p className={styles.CardDesciption}>
            {description}
        </p>
    )
};

CardDesciption.propTypes = {
    description: PropTypes.string.isRequired
}