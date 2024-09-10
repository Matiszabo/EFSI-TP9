import styles from './register.module.css';

export default function Register() {
  return (
    <main className={styles.container}>
      <h1>Registrarse</h1>
      <form>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="username">Nombre de usuario</label>
          <input className={styles.input} type="text" id="username" name="username" required />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="email">Correo electrónico</label>
          <input className={styles.input} type="email" id="email" name="email" required />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="password">Contraseña</label>
          <input className={styles.input} type="password" id="password" name="password" required />
        </div>
        <button className={styles.button} type="submit">Registrarse</button>
      </form>
      <div className={styles.loginLink}>
        <p>Ya tienes cuenta? <a href="/login">Inicia sesión aquí</a></p>
      </div>
    </main>
  );
}
