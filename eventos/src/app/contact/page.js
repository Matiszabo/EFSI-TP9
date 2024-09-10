
import styles from './contact.module.css';

export default function Contact() {
  return (
    <main className={styles.main}>
      <h1>Contacto</h1>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Correo Electrónico</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Mensaje</label>
          <textarea id="message" name="message" className={styles.textarea}></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>Enviar</button> 
      </form>
    </main>
  );
}
