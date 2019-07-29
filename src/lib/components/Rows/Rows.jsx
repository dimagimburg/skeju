import React from 'react';
import PropTypes from 'prop-types';
import styles from './Rows.scss';
import Columns from '../Columns';

export default function Rows(props) {
    const {
        rows, items, renderItem
    } = props;

    return (
        <>
            {rows.map(r => (
                <div key={r.id} className={styles.row}>
                    <Columns items={items} renderItem={renderItem} row={r} />
                </div>
            ))}
        </>
    );
}

Rows.propTypes = {
    rows: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string
    })).isRequired,
    items: PropTypes.array.isRequired,
    renderItem: PropTypes.func.isRequired
};
