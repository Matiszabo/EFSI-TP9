"use client";

import React, { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import styles from './LoginForm.module.css';
import { UserContext } from '../Components/UserContext/UserContext';

export default function LoginForm() {
  const [activeTab, setActiveTab] = useState('login');
  const { setUser } = useContext(UserContext);
  const router = useRouter();
  
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Genera un token simple (puedes usar JWT o una mejor opción en producción)
  const generateToken = (user) => {
    return btoa(`${user.email}:${new Date().getTime()}`);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    
    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;
    
    // Obtener los usuarios registrados del localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Buscar si existe un usuario con el mismo email y contraseña
    const foundUser = users.find(user => user.email === loginEmail && user.password === loginPassword);
    
    if (foundUser) {
      const token = generateToken(foundUser);
      localStorage.setItem('token', token);  // Guardar el token
      setUser(foundUser);
      router.push('/'); // Redirigir al inicio
    } else {
      alert('Usuario o contraseña incorrectos.');
    }
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    
    // Crear un nuevo usuario
    const newUser = {
      name: registerName,
      email: registerEmail,
      password: registerPassword,
    };
    
    // Obtener los usuarios ya registrados del localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Comprobar si el email ya está registrado
    const isEmailRegistered = users.some(user => user.email === registerEmail);
    
    if (isEmailRegistered) {
      alert('Este email ya está registrado.');
    } else {
      // Guardar el nuevo usuario en localStorage
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      const token = generateToken(newUser);
      localStorage.setItem('token', token);  // Guardar el token
      setUser(newUser);
      router.push('/');
    }
  };

  return (
    <div className={styles.container}>
      <ul className={styles.navPills} role="tablist">
        <li className={styles.navItem} role="presentation">
          <a
            className={`${styles.navLink} ${activeTab === 'login' ? styles.navLinkActive : ''}`}
            href='#'
            role="tab"
            aria-selected={activeTab === 'login'}
            onClick={() => handleTabChange('login')}
          >
            Login
          </a>
        </li>
        <li className={styles.navItem} role="presentation">
          <a
            className={`${styles.navLink} ${activeTab === 'register' ? styles.navLinkActive : ''}`}
            href='#'
            role="tab"
            aria-selected={activeTab === 'register'}
            onClick={() => handleTabChange('register')}
          >
            Register
          </a>
        </li>
      </ul>

      <div className={styles.tabContent}>
        {activeTab === 'login' && (
          <form onSubmit={handleLoginSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="loginEmail">Email</label>
              <input type="email" id="loginEmail" className={styles.formControl} required />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="loginPassword">Password</label>
              <input type="password" id="loginPassword" className={styles.formControl} required />
            </div>
            <button type="submit" className={styles.btnPrimary}>Sign in</button>
          </form>
        )}

        {activeTab === 'register' && (
          <form onSubmit={handleRegisterSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="registerName">Name</label>
              <input
                type="text"
                id="registerName"
                className={styles.formControl}
                value={registerName}
                onChange={(e) => setRegisterName(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="registerEmail">Email</label>
              <input
                type="email"
                id="registerEmail"
                className={styles.formControl}
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="registerPassword">Password</label>
              <input
                type="password"
                id="registerPassword"
                className={styles.formControl}
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className={styles.btnPrimary}>Sign up</button>
          </form>
        )}
      </div>
    </div>
  );
}
