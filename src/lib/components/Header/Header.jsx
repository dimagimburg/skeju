import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.scss';

export default function Header(props) {
    const {
        schedulerRef, columns
    } = props;

    return (
        <div className={styles.header}>
            { columns.map(column => <div key={Math.random()}>12</div>) }
        </div>
    );
}

Header.propTypes = {
    schedulerRef: PropTypes.any.isRequired,
    columns: PropTypes.array.isRequired
};
