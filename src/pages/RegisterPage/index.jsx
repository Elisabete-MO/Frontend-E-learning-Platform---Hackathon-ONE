import { RegisterBanner } from "../../components/RegisterPage/RegisterBanner";
import { RegisterForm } from "../../components/RegisterPage/RegisterForm";
import styles from "./RegisterPage.module.css"

export function RegisterPage() {
    return (
    <div className={styles.contentRegisterPage}>
        <RegisterBanner/>
        <RegisterForm/>
    </div>
    );
}