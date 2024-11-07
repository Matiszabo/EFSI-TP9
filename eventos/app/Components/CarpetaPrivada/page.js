"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from "@/app/Components/CarpetaPrivada/CarpetaPrivada.module.css"

export default function PrivateRoute({ children }) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  if (isAuthenticated === false) {
    return (
      <div className={styles.restrictedAccess}>
        <h2>Acceso restringido</h2>
        <p>Por favor, inicia sesión para continuar.</p>
        <button onClick={() => router.push("/LoginForm")} className={styles.loginButton}>
          Ir a Login
        </button>
      </div>
    );
  }

  // Mientras se verifica la autenticación
  if (isAuthenticated === null) {
    return <div className={styles.loading}>Cargando...</div>;
  }

  return children;
}
