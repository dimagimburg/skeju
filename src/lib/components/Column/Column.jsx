import React from 'react';
import PropTypes from 'prop-types';
import styles from './Column.scss';
import useColumnWidth from '../../hooks/computed/useColumnWidth';

export default function Column({children}) {
    const columnWidth = useColumnWidth();
    return <div style={{width: `${columnWidth}px`}} className={styles.dayColumn}>{children}</div>;
}

Column.propTypes = {
    children: PropTypes.object.isRequired
};
