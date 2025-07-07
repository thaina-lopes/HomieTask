import styles from "../Cabecalho/Cabecalho.module.css";

export default function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
      <h1 className={styles.titulo}>HomieTask</h1>
      <button className={styles.botaoPerfil}>👤</button>
    </header>
  );
}
