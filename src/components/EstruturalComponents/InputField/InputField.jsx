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
}

export default InputField;
