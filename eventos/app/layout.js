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

  useEffect(() => {
   const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        const userInfo = {
          id: parsedUser.id,
          name: `${parsedUser.first_name} ${parsedUser.last_name}`,
          username: parsedUser.username,
          imageUrl: parsedUser.imageUrl || null,
        };
        setUser(userInfo);
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
    <UserProvider value={{ user, setUser }}>
      <html lang="es">
        <body className={styles.body}>
          <main className={styles.main}>
            <header className={styles.header}>
              <div className={styles.logo}>
                <Link href="/">MiSitio</Link>
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
                <span className={styles.user}>
                  <img 
                    src={user.imageUrl ? user.imageUrl : "/img/person_28dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png"} 
                    alt={user.name} 
                    className={styles.userImage}
                  />
                  <span className={styles.userName}>{user.userName}</span>
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
            {children}
            <SomeComponent />
          </main>
        </body>
      </html>
    </UserProvider>
  );
}
  