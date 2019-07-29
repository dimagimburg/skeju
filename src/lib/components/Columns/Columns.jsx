import React from 'react';
import PropTypes from 'prop-types';
import Column from '../Column';
import Items from '../Items/Items';

export default function Rows(props) {
    const {
        items, renderItem, columns, row
    } = props;

    return (
        <>
            {columns.map(column => (
                <Column key={column.id}>
                    <Items
                        row={row}
                        items={items}
                        renderItem={renderItem}
                        column={column}
                    />
                </Column>
            ))}
        </>
    );
}

Rows.propTypes = {
    row: PropTypes.object.isRequired,
    columns: PropTypes.array.isRequired,
    items: PropTypes.array.isRequired,
    renderItem: PropTypes.func.isRequired
};
