import styles from "../Botao/Botao.module.css";

// Props personalizáveis: children (texto), tipo (primário/secundário), onClick
export default function Botao({ children, tipo = "primario", onClick }) {
  return (
    <button className={`${styles.botao} ${styles[tipo]}`} onClick={onClick}>
      {children}
    </button>
  );
}
