'use client';

import React, { useState, useEffect, useContext } from 'react';
import Footer from './Components/Footer';
import ListadoEvents from './Home/index';
import styles from "./page.module.css";
import { UserContext } from './Components/UserContext/UserContext';

export default function LoginPage() {
  const { user, setUser } = useContext(UserContext); // Usar el contexto aquí
  const [loading, setLoading] = useState(true);

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
        console.log("Usuario cargado:", userInfo);
      } catch (error) {
        console.error("Error al parsear el usuario almacenado:", error);
      }
    }
    setLoading(false);
  }, [setUser]); // Asegúrate de que setUser esté en las dependencias

  if (loading) {
    return <div>Cargando...</div>; // Mensaje de carga
  }

  return (
    <>
      <main className={styles.mainContent}>
        <ListadoEvents />
      </main>
      <Footer />
    </>
  );
}
