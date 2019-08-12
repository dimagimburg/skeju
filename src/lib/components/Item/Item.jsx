import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import cx from 'classnames';
import styles from './Item.scss';

const dayInSeconds = 24 * 60 * 60;

export default function Item(props) {
    console.log('render item');
    const {
        item, renderItem, columnWidth, hiddenStartDate, hiddenEndDate, columnStartDate
    } = props;

    const draw = item.startTime.isBetween(hiddenStartDate, hiddenEndDate) || item.endTime.isBetween(hiddenStartDate, hiddenEndDate);
    const lengthInDays = item.endTime.diff(item.startTime, 'days', true);
    const width = (lengthInDays * columnWidth).toFixed(3);
    const leftOffset = columnWidth * (Math.abs(moment.duration(columnStartDate.diff(item.startTime)).asSeconds()) / dayInSeconds);

    return draw && (
        <div className={cx(styles.itemWrapper)} style={{width, left: leftOffset}}>
            {renderItem({width, id: item.id})}
        </div>
    );
}

Item.propTypes = {
    item: PropTypes.exact({
        id: PropTypes.string.isRequired,
        row: PropTypes.string.isRequired,
        startTime: PropTypes.instanceOf(moment).isRequired,
        endTime: PropTypes.instanceOf(moment).isRequired
    }).isRequired,
    renderItem: PropTypes.func.isRequired,
    columnWidth: PropTypes.number.isRequired,
    hiddenStartDate: PropTypes.instanceOf(moment).isRequired,
    hiddenEndDate: PropTypes.instanceOf(moment).isRequired,
    columnStartDate: PropTypes.instanceOf(moment).isRequired,
};
