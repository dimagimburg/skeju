import React from 'react';
import styles from './Header.scss';
import useColumns from '../../hooks/computed/useColumns';
import useColumnWidth from '../../hooks/computed/useColumnWidth';

export default function Header() {
    const columns = useColumns();
    const columnWidth = useColumnWidth();

    return (
        <div className={styles.header}>
            {
                columns.map(column => (
                    <div key={column.id} style={{width: `${columnWidth}px`}} className={styles.headerColumn}>
                        {column.id}
                    </div>
                ))
            }
        </div>
    );
}
