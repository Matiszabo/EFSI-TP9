// src/app/page.js
export default function HomePage() {
    return (
      <div style={styles.container}>
        <h1>Bienvenido a Eventos</h1>
        <p>Descubre los mejores eventos cerca de ti.</p>
        <a href="/events" style={styles.link}>Ver eventos</a>
      </div>
    );
  }
  
  const styles = {
    container: {
      textAlign: 'center',
      marginTop: '50px',
    },
    link: {
      textDecoration: 'none',
      color: '#0070f3',
      fontSize: '18px',
      padding: '10px 20px',
      backgroundColor: '#eee',
      borderRadius: '5px',
    },
  };
  