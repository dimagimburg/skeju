import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styles from './Items.scss';

export default function Items(props) {
    const {
        items, renderItem, row, column, columnWidth
    } = props;
    return (
        <div>
            {
                items
                    .filter(item => item.row === row.id && item.startTime.isBetween(column.startDate, column.endDate))
                    .map((item) => {
                        const lengthInDays = item.endTime.diff(item.startTime, 'days', true);
                        const width = (lengthInDays * columnWidth).toFixed(3);
                        return (
                            <div key={item.id} className={styles.itemWrapper} style={{width}}>
                                {renderItem({width})}
                            </div>
                        );
                    })
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
    })).isRequired,
    columnWidth: PropTypes.number.isRequired
};
