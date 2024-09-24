import React from 'react';
import styles from './Contact.module.css';
import Footer from '../Components/Footer/index';
const Contact = () => {
  return (
    <>
    <div className={styles.container}>
      <h1 className={styles.title}>Contactanos</h1>
      <div className={styles.cards}>
        <div className={styles.card}>
          <h2 className={styles.name}>Matias Szabo</h2>
          <p className={styles.email}>matiszabo@gmail.com</p>
          <p className={styles.phone}>+123 456 7890</p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.name}>Roni Chmielevsky</h2>
          <p className={styles.email}>ronichimi@gmail.com</p>
          <p className={styles.phone}>+098 765 4321</p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.name}>Facundo Giraudi</h2>
          <p className={styles.email}>facugir@gmail.com</p>
          <p className={styles.phone}>+012 345 4321</p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Contact;
