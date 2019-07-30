import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {OuterPropsContext} from '../../state/OuterPropsContext';
import Column from '../Column';
import Items from '../Items/Items';

export default function Rows(props) {
    const {columns, row} = props;
    const {items, renderItem} = useContext(OuterPropsContext);

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
    columns: PropTypes.array.isRequired
};
