import styles from './login.module.css';

export default function Login() {
  return (
    <main className={styles.container}>
      <h1>Iniciar sesión</h1>
      <form>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="username">Nombre de usuario</label>
          <input className={styles.input} type="text" id="username" name="username" required />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="password">Contraseña</label>
          <input className={styles.input} type="password" id="password" name="password" required />
        </div>
        <button className={styles.button} type="submit">Iniciar sesión</button>
      </form>
      <div className={styles.registerLink}>
        <p>No tienes cuenta? <a href="/register">Regístrate aquí</a></p>
      </div>
    </main>
  );
}
