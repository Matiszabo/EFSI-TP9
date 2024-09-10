import styles from './events.module.css';

export default function Events() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Eventos</h1>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>Evento 1</h2>
          <p>Descripción del evento 1. Ven y participa.</p>
          <button>Ver Más</button>
        </div>

        <div className={styles.card}>
          <h2>Evento 2</h2>
          <p>Descripción del evento 2. ¡No te lo pierdas!</p>
          <button>Ver Más</button>
        </div>

        <div className={styles.card}>
          <h2>Evento 3</h2>
          <p>Descripción del evento 3. Reserva tu lugar.</p>
          <button>Ver Más</button>
        </div>
      </div>
    </div>
  );
}
