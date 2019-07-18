import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.scss';
import useColumns from '../../hooks/computed/useColumns';
import HeaderItem from '../HeaderItem/HeaderItem';

export default function Header(props) {
    const {
        schedulerRef
    } = props;

    const columns = useColumns();

    return (
        <div className={styles.header}>
            { columns.map(column => <HeaderItem key={column.id} column={column} schedulerRef={schedulerRef} />) }
        </div>
    );
}

Header.propTypes = {
    schedulerRef: PropTypes.any.isRequired
};
