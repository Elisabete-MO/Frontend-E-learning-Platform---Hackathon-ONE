import PropTypes from "prop-types";
import styles from "./InputField.module.css";

function InputField({ 
  icon, 
  placeholder, 
  type = "text", 
  required = true,  
  value, 
  onChange, 
  error = false // agora a prop existe
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${styles.inputField} ${error ? styles.error : ""}`}
      style={{ backgroundImage: `url(${icon})` }}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
};

InputField.propTypes = {
  icon: PropTypes.string.isRequired, 
  placeholder: PropTypes.string.isRequired, 
  type: PropTypes.string.isRequired, 
  required: PropTypes.bool,  
  value: PropTypes.any.isRequired, 
  onChange: PropTypes.func.isRequired, 
  error: PropTypes.bool
};

export default InputField;
