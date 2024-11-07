'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './layout.module.css';
import { UserProvider } from './Components/UserContext/UserContext'; 
import SomeComponent from './SomeComponent/SomeComponent';
import Image from 'next/image';

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const router = useRouter();

  // Cargar el usuario desde cookies o localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser({
          id: parsedUser.id,
          name: `${parsedUser.first_name} ${parsedUser.last_name}`,
          username: parsedUser.username, // Solo se guarda el username
        });
      } catch (error) {
        console.error("Error al parsear el usuario almacenado:", error);
      }
    }
    setLoading(false);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user'); // Remueve el usuario del localStorage
    setUser(null);
    router.push('/LoginForm'); 
  };

  const handleLogin = () => {
    router.push('/LoginForm'); 
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <UserProvider value={{ user, setUser }}>
      <html lang="es">
        <body className={styles.body}>
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
                  <div className={styles.userInfo}>
                    <span className={styles.userName}>{user.username}</span>
                    <button className={styles.logoutButton} onClick={handleLogout}>
                      Cerrar sesión
                    </button>
                  </div>
                ) : (
                  <button className={styles.loginLink} onClick={handleLogin}>
                    Iniciar sesión
                  </button>
                )}
              </div>
            </header>
            {children}
            <SomeComponent />
          </main>
        </body>
      </html>
    </UserProvider>
  );
}
