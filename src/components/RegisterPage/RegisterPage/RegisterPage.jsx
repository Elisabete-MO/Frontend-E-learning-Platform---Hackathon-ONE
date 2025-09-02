import RegisterBanner from "../RegisterBanner/RegisterBanner";
import RegisterForm from "../RegisterForm/RegisterForm";
import styles from "./RegisterPage.module.css"

function RegisterPage() {
    return (
    <div id={styles.contentRegisterPage}>
        <RegisterBanner/>
        <RegisterForm/>
    </div>
    );
}
export default RegisterPage;