import React from 'react';
import PropTypes from 'prop-types';
import styles from './Column.scss';

export default function Column({columnWidth, children = null}) {
    return <div style={{width: `${columnWidth}px`}} className={styles.dayColumn}>{children}</div>;
}

Column.propTypes = {
    children: PropTypes.object,
    columnWidth: PropTypes.number.isRequired
};
