import React from 'react';
import PropTypes from 'prop-types';
import styles from './Column.scss';

export default function Column({children, width}) {
    return <div style={{width: `${width}px`}} className={styles.dayColumn}>{children}</div>;
}

Column.propTypes = {
    children: PropTypes.object.isRequired,
    width: PropTypes.number.isRequired
};
