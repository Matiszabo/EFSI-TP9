"use client";

import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [loggedIn, setLoggedIn] = useState(false);
  const username = "Juan"; 

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="Logo de Eventos" className={styles.logoImage} />
      </div>
      <nav>
        <ul className={styles.navList}>
          <li><a href="/">Home</a></li>
          <li><a href="/events">Eventos</a></li>
          <li><a href="/contact">Contacto</a></li>
        </ul>
      </nav>
      <div className={styles.userInfo}>
        {loggedIn ? (
          <>
            <span>Hola, {username}</span>
            <button className={styles.logoutButton}>Cerrar sesión</button>
          </>
        ) : (
          <a href="/login" className={styles.loginRegisterButton}>Iniciar sesión / Registrar</a>
        )}
      </div>
    </header>
  );
}
