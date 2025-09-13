import imagemRegistro from "../../../assets/ilustracao-cadastro.png"
import styles from "./RegisterBanner.module.css"

export function RegisterBanner() {
  return (
    <div id='content'>
      <h1 className={styles.title}>Aprenda no seu ritmo, evolua sem limites.</h1>
      <img src={imagemRegistro} alt='Ilustração de uma mulher de cabelos longos estudando'></img>
      <h2>Cursos práticos e acessíveis para transformar o seu futuro.</h2>
    </div>
  );
};