import React, {useContext, useState} from 'react';
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

    const [selected, setItemSelected] = useState(false);

    const {renderItem} = useContext(OuterPropsContext);
    const {startTime, endTime, drawFromRight, drawFromCenter, id, allowSelect} = item;
    const lengthInDays = endTime.diff(startTime, 'days', true);
    const width = (lengthInDays * columnWidth).toFixed(3);
    const leftOffset = columnWidth * (Math.abs(moment.duration(columnStartDate.diff(startTime)).asSeconds()) / dayInSeconds);
    const rightOffset = (lengthInDays * columnWidth) - (columnWidth * (moment.duration(endTime.diff(columnStartDate)).asSeconds() / dayInSeconds));

    let positioningStyles = {};
    if (drawFromCenter) {
        positioningStyles = {
            left: -width / 2
        };
    } else {
        positioningStyles = {
            [drawFromRight ? 'right' : 'left']: [drawFromRight ? rightOffset : leftOffset]
        };
    }

    function handleItemClicked() {
        if (allowSelect) {
            setItemSelected(!selected);
        }
    }

    return (
        <div
            className={cx(styles.itemWrapper, {selected})}
            style={{width, ...positioningStyles}}
            onClick={handleItemClicked}
            onKeyPress={handleItemClicked}
        >
            {renderItem({width, id})}
        </div>
    );
}

Item.propTypes = {
    item: PropTypes.exact({
        id: PropTypes.string.isRequired,
        row: PropTypes.string.isRequired,
        startTime: PropTypes.instanceOf(moment).isRequired,
        endTime: PropTypes.instanceOf(moment).isRequired,
        drawFromRight: PropTypes.bool.isRequired,
        drawFromCenter: PropTypes.bool.isRequired,
        allowSelect: PropTypes.bool
    }).isRequired,
    columnWidth: PropTypes.number.isRequired,
    columnStartDate: PropTypes.instanceOf(moment).isRequired,
};
