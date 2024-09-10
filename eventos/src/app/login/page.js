import styles from './login.module.css';

export default function Login() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1 className={styles.title}>Iniciar Sesión</h1>
        <label className={styles.label} htmlFor="username">Nombre de Usuario</label>
        <input className={styles.input} type="text" id="username" name="username" />

        <label className={styles.label} htmlFor="password">Contraseña</label>
        <input className={styles.input} type="password" id="password" name="password" />

        <button className={styles.button} type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
}
