import PropTypes from "prop-types";
import styles from "./Title.module.css";

function Level1({titleText}) {
    return (
        <h1 className={`${styles.Titles} ${styles.TitleLevel1}`}>
            {titleText}
        </h1>
    );
};

function Level2({titleText}) {
    return (
        <h2 className={`${styles.Titles} ${styles.TitleLevel2}`}>
            {titleText}
        </h2>
    );
};

function Level3({titleText}) {
    return (
        <h3 className={styles.Titles}>
            {titleText}
        </h3>
    );
};

function Level4({titleText}) {
    return (
        <h4 className={styles.Titles}>
            {titleText}
        </h4>
    );
};

function Level5({titleText}) {
    return (
        <h5 className={styles.Titles}>
            {titleText}
        </h5>
    );
};

function Level6({titleText}) {
    return (
        <h6 className={styles.Titles}>
            {titleText}
        </h6>
    );
};

Level1.propTypes, Level2.propTypes, Level3.propTypes, Level4.propTypes, Level5.propTypes, Level6.propTypes = {
    titleText: PropTypes.string.isRequired
};

export const Title = {
    Level1,
    Level2,
    Level3,
    Level4,
    Level5,
    Level6
};