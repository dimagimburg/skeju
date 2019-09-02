import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import cx from 'classnames';
import {OuterPropsContext} from '../../state/OuterPropsContext';
import styles from './Item.scss';

const dayInSeconds = 24 * 60 * 60;

export default function Item(props) {
    const {
        item, columnWidth, columnStartDate
    } = props;

    const {renderItem} = useContext(OuterPropsContext);

    const lengthInDays = item.endTime.diff(item.startTime, 'days', true);
    const width = (lengthInDays * columnWidth).toFixed(3);
    const leftOffset = columnWidth * (Math.abs(moment.duration(columnStartDate.diff(item.startTime)).asSeconds()) / dayInSeconds);
    const rightOffset = (lengthInDays * columnWidth) - (columnWidth * (moment.duration(item.endTime.diff(columnStartDate)).asSeconds() / dayInSeconds));

    let positioningStyles = {};
    if (item.drawFromCenter) {
        positioningStyles = {
            left: -width / 2
        };
    } else {
        positioningStyles = {
            [item.drawFromRight ? 'right' : 'left']: [item.drawFromRight ? rightOffset : leftOffset]
        };
    }

    console.log(item.id, item.drawFromCenter);

    return <div className={cx(styles.itemWrapper)} style={{width, ...positioningStyles}}>{renderItem({width, id: item.id})}</div>;
}

Item.propTypes = {
    item: PropTypes.exact({
        id: PropTypes.string.isRequired,
        row: PropTypes.string.isRequired,
        startTime: PropTypes.instanceOf(moment).isRequired,
        endTime: PropTypes.instanceOf(moment).isRequired,
        drawFromRight: PropTypes.bool.isRequired,
        drawFromCenter: PropTypes.bool.isRequired
    }).isRequired,
    columnWidth: PropTypes.number.isRequired,
    columnStartDate: PropTypes.instanceOf(moment).isRequired,
};
