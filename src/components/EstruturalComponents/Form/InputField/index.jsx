import PropTypes from "prop-types";
import styles from "./InputField.module.css";

export function InputField({ 
  icon, 
  placeholder, 
  type = "text", 
  required = true,  
  value, 
  onChange, 
  isAutoFocus = false,
  error = false // agora a prop existe
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${styles.inputField} ${error ? styles.error : ""} ${!icon ? styles.isCheckInput : null}`}
      style={{ backgroundImage: `url(${icon})` }}
      value={value}
      onChange={onChange}
      required={required}
      autoFocus={isAutoFocus}
    />
  );
};

InputField.propTypes = {
  icon: PropTypes.string, 
  placeholder: PropTypes.string, 
  type: PropTypes.string, 
  required: PropTypes.bool,  
  value: PropTypes.any, 
  onChange: PropTypes.func, 
  isAutoFocus: PropTypes.bool,
  error: PropTypes.bool
};
