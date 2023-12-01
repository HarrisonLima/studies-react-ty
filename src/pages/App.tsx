import Cronometro from "../components/Cronometro";
import Formulario from "../components/Formulario";
import Lista from "../components/Lista";
import styles from './App.module.scss'

export default function App() {
  return (
    <div className={styles.AppStyle}>
      <Formulario />
      <Lista />
      <Cronometro />
    </div>
  );
}
