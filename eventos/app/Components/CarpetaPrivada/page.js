"use client";
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import styles from "@/app/Components/CarpetaPrivada/CarpetaPrivada.module.css";

export default function PrivateRoute({ children }) {
  const router = useRouter();
  const pathname = usePathname();  
  const [isAuthenticated, setIsAuthenticated] = useState(false);  

  const protectedRoutes = ['/Home', '/DetalleEvento'];

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsAuthenticated(true); 
    } else {
      setIsAuthenticated(false); 
    }
  }, []);  

  useEffect(() => {
    if (!isAuthenticated && protectedRoutes.some(route => pathname.startsWith(route))) {
      router.push('/');  
    }
  }, [isAuthenticated, pathname, router]);

  if (!isAuthenticated) {
    return <div className={styles.loading}>Cargando...</div>;
  }

  return children;  
}
