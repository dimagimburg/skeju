import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.scss';
import HeaderItem from '../HeaderItem';

export default function Header(props) {
    const {
        schedulerRef, columns
    } = props;

    const visibility = columns.reduce((columnsVisibiltyObject, nextColumn) => {
        const copyColumnsVisibiltyObject = Object.assign(columnsVisibiltyObject, {});
        copyColumnsVisibiltyObject[nextColumn.id] = false;
        return copyColumnsVisibiltyObject;
    }, {});

    return (
        <div className={styles.header}>
            { columns.map(column => <HeaderItem key={column.id} column={column} schedulerRef={schedulerRef} />) }
        </div>
    );
}

Header.propTypes = {
    schedulerRef: PropTypes.any.isRequired,
    columns: PropTypes.array.isRequired
};
