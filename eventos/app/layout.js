"use client";

import React, { useState, useContext, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './layout.module.css';
import { UserContext }  from './Components/UserContext/UserContext';
import Image from 'next/image';

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);  
  const [user, setUser] = useState(null);  
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        if (parsedUser && parsedUser.name) {
          setUser(parsedUser);  
        }
      } catch (error) {
        console.error("Error al parsear el usuario almacenado:", error);
      }
    }
    setLoading(false);  
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');  
    setUser(null);  
    router.push('/');  
  };

  if (loading) {
    return <div>Cargando...</div>;  
  }

  return (
      <html lang="es">
        <body className={styles.body} >
          <main className={styles.main}>
            <header className={styles.header}>
              <div className={styles.logo}>
              <Link href="/">
              <Image 
                src="/logo.png" 
                alt="Logo de Eventos" 
                width={50} 
                height={50}
              />
              </Link>
              </div>
              <nav className={styles.nav}>
                <ul>
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/Contact">Contacto</Link></li>
                </ul>
              </nav>
  
              <div className={styles.userSection}>
                {user ? (
                  <>
                    <span className={styles.userInfo}>
                      <span className={styles.userName}>{user.name}</span>
                    </span>
                    <button className={styles.logoutButton} onClick={handleLogout}>
                      Cerrar sesión
                    </button>
                  </>
                ) : (
                  <Link href='/LoginForm' className={styles.loginLink}>
                    Iniciar sesión
                  </Link>
                )}
              </div>
            </header>
          </main>
           <UserContext.Provider value={{ user, setUser }}> 
            {children}
          </UserContext.Provider>
        </body>
      </html>
  );
}
