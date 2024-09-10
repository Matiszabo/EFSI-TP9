"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [loggedIn, setLoggedIn] = useState(false);
  const username = "Juan"; 

  return (
    <header style={styles.header}>
      <div className="logo">
        <img src="/logo.png" alt="Logo de Eventos" style={styles.logo} />
      </div>
      <nav>
        <ul style={styles.navList}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/events">Eventos</Link></li>
          <li><Link href="/contact">Contacto</Link></li>
        </ul>
      </nav>
      <div className="user-info" style={styles.userInfo}>
        {loggedIn ? (
          <span>Hola, {username}</span>
        ) : (
          <Link href="/login">Iniciar sesión / Registrarse</Link>
        )}
      </div>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    zIndex: 1000,
  },
  logo: {
    height: '50px',
  },
  navList: {
    display: 'flex',
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  },
  userInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
};
