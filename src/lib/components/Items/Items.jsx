import React, {useContext, useMemo} from 'react';
import PropTypes from 'prop-types';
import Item from '../Item';
import {OuterPropsContext} from '../../state/OuterPropsContext';

export default function Items(props) {
    const {
        row, column
    } = props;

    const {items, renderItem} = useContext(OuterPropsContext);

    const itemsFilteredAndRendered = useMemo(() => (
        items
            .filter(item => item.row === row.id && item.startTime.isBetween(column.startDate, column.endDate))
            .map(item => <Item key={item.id} item={item} renderItem={renderItem} />)
    ), [items]);

    return <>{itemsFilteredAndRendered}</>;
}

Items.propTypes = {
    row: PropTypes.any.isRequired,
    column: PropTypes.any.isRequired
};
