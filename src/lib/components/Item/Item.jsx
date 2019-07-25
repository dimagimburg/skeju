import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import cx from 'classnames';
import styles from './Item.scss';

export default function Items(props) {
    const {
        item, renderItem, columnWidth
    } = props;

    const lengthInDays = item.endTime.diff(item.startTime, 'days', true);
    const width = (lengthInDays * columnWidth).toFixed(3);

    return (
        <div className={cx(styles.itemWrapper)} style={{width}}>
            {renderItem({width})}
        </div>
    );
}

Items.propTypes = {
    item: PropTypes.exact({
        id: PropTypes.string.isRequired,
        row: PropTypes.string.isRequired,
        startTime: PropTypes.instanceOf(moment).isRequired,
        endTime: PropTypes.instanceOf(moment).isRequired
    }).isRequired,
    renderItem: PropTypes.func.isRequired,
    columnWidth: PropTypes.number.isRequired,
};
