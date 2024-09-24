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

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    
    const user = {
      name: registerName, 
      email: registerEmail, 
    };
    
    localStorage.setItem('user', JSON.stringify(user));
    setUser(user);
    router.push('/');
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
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
              <label className={styles.formLabel} htmlFor="loginEmail">Email or username</label>
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
                onChange={(e) => setRegisterName(e.target.value)} // Captura el nombre
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="registerUsername">Username</label>
              <input type="text" id="registerUsername" className={styles.formControl} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="registerEmail">Email</label>
              <input
                type="email"
                id="registerEmail"
                className={styles.formControl}
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)} // Captura el email
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="registerPassword">Password</label>
              <input type="password" id="registerPassword" className={styles.formControl} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="registerRepeatPassword">Repeat password</label>
              <input type="password" id="registerRepeatPassword" className={styles.formControl} />
            </div>
            <div className={styles.checkboxGroup}>
              <input className={styles.checkbox} type="checkbox" id="registerCheck" defaultChecked />
              <label className={styles.checkboxLabel} htmlFor="registerCheck">
                I have read and agree to the terms
              </label>
            </div>
            <button type="submit" className={styles.btnPrimary}>Sign up</button>
          </form>
        )}
      </div>
    </div>
  );
}
