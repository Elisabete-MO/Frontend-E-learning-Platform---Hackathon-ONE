import PropTypes from "prop-types";
import styles from "./CardImage.module.css";

export function CardImage({imgUrl, altText, ...rest}){
    return (
        <span className={styles.CardImgBox} {...rest}>
            <img src={imgUrl} alt={altText} title={altText} className={styles.CardImg} />
        </span>
    )
};

CardImage.propTypes = {

};

CardImage.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired
};