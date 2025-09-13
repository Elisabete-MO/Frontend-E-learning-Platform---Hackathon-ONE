import { useState } from "react";
import { Form } from "../../EstruturalComponents/Form";
import styles from "./Form.module.css";
import emailIcon from "../../../assets/icons/email.svg";
import passwordIcon from "../../../assets/icons/lock.svg";

export function LoginForm () {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleLoginSubmit = async (event) => {
        event.preventDefault();
        const dadosDeUsuario = {
            email,
            senha
        };
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dadosDeUsuario),
            });

            if (!response.ok) {
                throw new Error("Erro ao enviar o formulário");
            }

            const resultado = await response.json();
            console.log("Resposta do servidor:", resultado);
            alert("Login realizado com sucesso!");
        } catch (error) {
            console.error("Erro:", error);
            alert("Falha ao enviar o formulário");
        }
        
    };
    return (
        <Form.FormContainer formHandle={handleLoginSubmit}>
            <Form.LabelField labelName="E-mail:" >
                <Form.InputField icon={emailIcon} placeholder="Insira seu e-mail" required={true} type="email" isAutoFocus={true} onChange={(event) => setTimeout(() => setEmail(event.target.value), 1500)}/>
            </Form.LabelField>
            <Form.LabelField labelName="Senha:">
                <Form.InputField icon={passwordIcon} placeholder="Digite sua senha" required={true} type="password" onChange={(event) => setTimeout(() => setSenha(event.target.value), 1500)}/>
            </Form.LabelField>
            <Form.LabelField labelName="Lembrar de mim" isCheckInput={true}>
                <Form.InputField value="remember" type="checkbox"/>
            </Form.LabelField>
            <Form.Button buttonName="Entrar" />
            <div className={styles.loginFormDetailsContainer}>
                <p>Ainda não tem conta?</p>
                <a href="/" className={styles.loginFormAnchor}>Cadastrar-se agora</a>
            </div>
        </Form.FormContainer>
    );
};
