import React from 'react';
import styles from './Debug.scss';
import useStateValue from '../../hooks/useStateValue';

export default function Debug() {
    const [{ui}, dispatch] = useStateValue();
    return (
        <div className={styles.debug}>
            nothing to show
        </div>
    );
}
