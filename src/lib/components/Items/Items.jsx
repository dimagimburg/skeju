import React, {useContext, useMemo} from 'react';
import PropTypes from 'prop-types';
import Item from '../Item';
import {OuterPropsContext} from '../../state/OuterPropsContext';

export default function Items(props) {
    const {
        row, column
    } = props;

    const {items, renderItem} = useContext(OuterPropsContext);

    const itemsFilteredAndRendered = useMemo(() => {
        const itemsToDraw = items.filter((item) => {
            const startTimeIsInColumn = item.startTime.isBetween(column.startDate, column.endDate, null, '[)');
            const endTimeIsInColumn = item.endTime.isBetween(column.startDate, column.endDate, null, '[)');
            return item.row === row.id && (startTimeIsInColumn || endTimeIsInColumn);
        });
        return itemsToDraw.map(item => <Item key={item.id} item={item} renderItem={renderItem} columnStartDate={column.startDate} />);
    }, [items]);

    return <>{itemsFilteredAndRendered}</>;
}

Items.propTypes = {
    row: PropTypes.any.isRequired,
    column: PropTypes.any.isRequired
};
