import userIco from "../../../assets/icons/user.svg";
import emailIco from "../../../assets/icons/email.svg";
import lockIco from "../../../assets/icons/lock.svg";
import InputField from "../../EstruturalComponents/InputField/InputField";
import { useState } from "react";
import styles from "./RegisterForm.module.css";

function RegisterForm() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmaSenha, setConfirmaSenha] = useState("");
    const [senhasDiferentes, setSenhasDiferentes] = useState(false);
    const [tipoUsuario, setTipoUsuario] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (senha !== confirmaSenha) {
            setSenhasDiferentes(true);
            alert("Senhas são diferentes");
            return;
        }

        setSenhasDiferentes(false);

        const dados = {
            nome,
            email,
            senha,
            tipoUsuario
        };

        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dados),
            });

            if (!response.ok) {
                throw new Error("Erro ao enviar o formulário");
            }

            const resultado = await response.json();
            console.log("Resposta do servidor:", resultado);
            alert("Cadastro realizado com sucesso!");
        } catch (error) {
            console.error("Erro:", error);
            alert("Falha ao enviar o formulário");
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.registerForm}>
            <InputField
                placeholder="Nome completo"
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                icon={userIco}
            />
            <InputField
                placeholder="Insira seu e-mail"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                icon={emailIco}
            />
            <InputField
                placeholder="Insira sua senha"
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                icon={lockIco}
                error={senhasDiferentes}
            />
            <InputField
                placeholder="Confirme sua senha"
                type="password"
                value={confirmaSenha}
                onChange={(e) => setConfirmaSenha(e.target.value)}
                icon={lockIco}
                error={senhasDiferentes}
            />

            <select value={tipoUsuario} onChange={(e) => setTipoUsuario(e.target.value)}>
                <option value="" disabled>Selecione uma opção</option>
                <option value="aluno">Sou aluno</option>
                <option value="instrutor">Sou instrutor</option>
            </select>

            <button id="cadastrar" type="submit">Cadastre-se agora</button>
            <span>Já tem conta? <a href="/login">Entrar</a></span>
        </form>
    );
}

export default RegisterForm;
