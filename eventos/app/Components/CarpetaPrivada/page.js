"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
//import styles from './CarpetaPrivadas.module.css';

export default function PrivateRoute({ children }) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  
  if (isAuthenticated === null) {
    return <div >Cargando...</div>;
  }
  return children;
}
