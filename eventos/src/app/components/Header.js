// src/app/components/Header.js
"use client";

import { useState } from 'react';

export default function Header() {
  const [loggedIn, setLoggedIn] = useState(false);
  const username = "Juan"; // Simulación de usuario logueado

  return (
    <header style={styles.header}>
      <div className="logo">
        <img src="/logo.png" alt="Logo de Eventos" style={styles.logo} />
      </div>
      <nav>
        <ul style={styles.navList}>
          <li><a href="/">Home</a></li>
          <li><a href="/events">Eventos</a></li>
          <li><a href="/contact">Contacto</a></li>
        </ul>
      </nav>
      <div className="user-info" style={styles.userInfo}>
        {loggedIn ? (
          <>
            <span>Hola, {username}</span>
            <button style={styles.logoutButton}>Cerrar sesión</button>
          </>
        ) : (
          <a href="/login">Iniciar sesión</a>
        )}
      </div>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#333',
    color: 'white',
  },
  logo: {
    height: '50px',
  },
  navList: {
    display: 'flex',
    listStyleType: 'none',
    gap: '20px',
  },
  userInfo: {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
  },
  logoutButton: {
    backgroundColor: '#ff4d4d',
    border: 'none',
    padding: '5px 10px',
    color: 'white',
    cursor: 'pointer',
  },
};
