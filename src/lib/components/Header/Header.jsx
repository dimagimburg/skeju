import React from 'react';
import styles from './Header.scss';
import useStateValue from '../../hooks/useStateValue';

export default function Header() {
    const [{ ui: {schedulerWidth} }, dispatch] = useStateValue();
    return <div className={styles.header}>Header! hi: {schedulerWidth}</div>;
}
