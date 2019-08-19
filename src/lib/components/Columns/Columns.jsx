import React from 'react';
import PropTypes from 'prop-types';
import Column from '../Column';
import Items from '../Items';

export default function Columns(props) {
    const {columns, row} = props;

    return (
        <>
            {columns.map(column => (
                <Column key={column.id}>
                    <Items
                        row={row}
                        column={column}
                    />
                </Column>
            ))}
        </>
    );
}

Columns.propTypes = {
    row: PropTypes.object.isRequired,
    columns: PropTypes.array.isRequired
};
