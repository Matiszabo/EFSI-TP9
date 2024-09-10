import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.title}>Bienvenidos a la plataforma de Eventos</h1>
      </header>

      <section className={styles.intro}>
        <p>En esta plataforma podrás registrarte, ver y suscribirte a diferentes eventos.</p>
      </section>

      <section className={styles.grid}>
        <div className={styles.card}>
          <h2>Explora Eventos</h2>
          <p>Descubre eventos cercanos a ti y participa en ellos.</p>
        </div>

        <div className={styles.card}>
          <h2>Regístrate</h2>
          <p>Crea una cuenta para gestionar y asistir a tus eventos favoritos.</p>
        </div>

        <div className={styles.card}>
          <h2>Inicia Sesión</h2>
          <p>Accede a tu cuenta y revisa tus eventos programados.</p>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>© 2024 Eventos. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}
