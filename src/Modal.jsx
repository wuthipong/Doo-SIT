import React from 'react';
import styles from './App.module.css';

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className={styles.modalPop}>
      <div className={styles.modalContent} onClick={(e) => {
          e.stopPropagation();
        }}>
        <span className={styles.close} onClick={onClose}>×</span>
        <img src="/Calendar.png" className={styles.center} width={600} height="auto" />
        <div className={styles.gridContainer}>
          <div className={styles.gridItem}>
            <div><p style={{fontFamily: 'Arial, Helvetica, sans-serif', marginLeft: '5%', fontWeight: 300, fontSize: 'medium', color: 'white'}}>Amount of People</p>
              <p style={{fontFamily: 'Arial, Helvetica, sans-serif', marginLeft: '25%', fontWeight: 300, fontSize: 'xx-large', color: 'white'}}>40 peoples</p>
              <p style={{fontFamily: 'Arial, Helvetica, sans-serif', marginLeft: '5%', fontWeight: 300, fontSize: 'x-small', color: 'white'}}>Update <span id="datetime" /></p></div>                                       
          </div>
          <div className={styles.gridItem}>
            <div><p style={{fontFamily: 'Arial, Helvetica, sans-serif', marginLeft: '5%', fontWeight: 300, fontSize: 'medium', color: 'white'}}>Temperature</p>
              <p style={{fontFamily: 'Arial, Helvetica, sans-serif', marginLeft: '25%', fontWeight: 300, fontSize: 'xx-large', color: 'white'}}>23 C</p>
              <p style={{fontFamily: 'Arial, Helvetica, sans-serif', marginLeft: '5%', fontWeight: 300, fontSize: 'x-small', color: 'white'}}>Update <span id="datetime2" /></p></div>
          </div>
          <div className={styles.gridItem}>
            <div><p style={{fontFamily: 'Arial, Helvetica, sans-serif', marginLeft: '5%', fontWeight: 300, fontSize: 'medium', color: 'white'}}>Electric Power</p>
              <p style={{fontFamily: 'Arial, Helvetica, sans-serif', marginLeft: '25%', fontWeight: 300, fontSize: 'xx-large', color: 'white'}}>2340 watt</p>
              <p style={{fontFamily: 'Arial, Helvetica, sans-serif', marginLeft: '5%', fontWeight: 300, fontSize: 'x-small', color: 'white'}}>Update <span id="datetime3" /></p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;