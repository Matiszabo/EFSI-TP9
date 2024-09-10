export default function Footer() {
    return (
      <footer style={styles.footer}>
        <div>
          <p>&copy; 2024 Eventos. Todos los derechos reservados.</p>
        </div>
        <div className="social-links" style={styles.socialLinks}>
          <a href="https://facebook.com">Facebook</a>
          <a href="https://twitter.com">Twitter</a>
          <a href="https://instagram.com">Instagram</a>
        </div>
      </footer>
    );
  }
  
  const styles = {
    footer: {
      backgroundColor: '#333',
      color: 'white',
      padding: '20px',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'space-between',
    },
    socialLinks: {
      display: 'flex',
      gap: '15px',
    },
  };
  