import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item';

export default function Items(props) {
    const {
        row, column, normalizedItems
    } = props;

    const itemsToRender = Object.values(normalizedItems[row.id][column.id]);
    return <>{itemsToRender.map(item => <Item key={item.id} item={item} columnStartDate={column.startDate} />)}</>;
}

Items.propTypes = {
    row: PropTypes.any.isRequired,
    column: PropTypes.any.isRequired,
    normalizedItems: PropTypes.object.isRequired
};
