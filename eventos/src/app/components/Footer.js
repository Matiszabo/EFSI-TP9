export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2024 Eventos. Todos los derechos reservados.</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#007bff', 
    color: 'white',
    textAlign: 'center',
    padding: '20px',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    fontSize: '14px',
  },
};
