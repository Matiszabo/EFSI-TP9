import styles from './register.module.css';

export default function Register() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1 className={styles.title}>Registrarse</h1>
        <label className={styles.label} htmlFor="username">Nombre de Usuario</label>
        <input className={styles.input} type="text" id="username" name="username" />

        <label className={styles.label} htmlFor="email">Correo Electrónico</label>
        <input className={styles.input} type="email" id="email" name="email" />

        <label className={styles.label} htmlFor="password">Contraseña</label>
        <input className={styles.input} type="password" id="password" name="password" />

        <button className={styles.button} type="submit">Registrarse</button>
      </form>
    </div>
  );
}
