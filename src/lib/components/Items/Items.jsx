import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Item from '../Item';

export default function Items(props) {
    const {
        items, renderItem, row, column
    } = props;

    return (
        <div>
            {
                items
                    .filter(item => item.row === row.id && item.startTime.isBetween(column.startDate, column.endDate))
                    .map(item => <Item key={item.id} item={item} renderItem={renderItem} />)
            }
        </div>
    );
}

Items.propTypes = {
    row: PropTypes.any.isRequired,
    column: PropTypes.any.isRequired,
    renderItem: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        row: PropTypes.string.isRequired,
        startTime: PropTypes.instanceOf(moment).isRequired,
        endTime: PropTypes.instanceOf(moment).isRequired
    })).isRequired
};
