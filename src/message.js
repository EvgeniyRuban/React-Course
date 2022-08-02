import React from 'react';
import styles from './message.module.css';

export function Message({text}){
    return <div className = {styles.message}>{text}</div>
} 