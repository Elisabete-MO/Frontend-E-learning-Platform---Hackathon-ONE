import { ExternalContainer } from "../../EstruturalComponents/ExternalContainer";
import { Title } from "../../EstruturalComponents/Title";
import imagemLogin from "../../../assets/ilustracao-login.svg"
import styles from "./LoginBanner.module.css";

export function LoginBanner(){
    return (
        <ExternalContainer>
            <Title.Level1 titleText={"Bem vindo de volta! Continue sua jornada de aprendizado."}/>
            <img src={imagemLogin} alt="Ilustração de mulher estudando" className={styles.LoginImage}/>
            <Title.Level2 titleText={"Acesse sua conta e avance no seu ritmo."}/>
        </ExternalContainer>
    );
};