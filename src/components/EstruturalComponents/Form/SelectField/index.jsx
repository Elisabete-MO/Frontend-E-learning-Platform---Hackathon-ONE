import PropTypes from "prop-types";
import styles from "./SelectField.module.css";

export function SelectField ({
    selectlist, 
    selectName,
    selectHandle}){
    return (
        <select name={selectName} value={selectName} onChange={selectHandle}>
            <option value="" disabled>Selecione uma opção</option>
            {selectlist.map( option => {
                <option value={option} key={option}>{option}</option>
            })}
        </select>
    )
};

SelectField.propTypes = {
    selectlist: PropTypes.array.isRequired,
    selectName: PropTypes.string.isRequired,
    selectHandle: PropTypes.func.isRequired
};