import React, { useContext, useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import cx from 'classnames';
import { OuterPropsContext } from '../../state/OuterPropsContext';
import { getItemPositioningStyles } from './utils';
import { useResizable } from '../../hooks';
import styles from './Item.scss';

const dayInSeconds = 24 * 60 * 60;

function handleItemClicked(allowSelect, isSelected, setItemSelected) {
    window.getSelection().removeAllRanges();
    if (allowSelect) {
        setItemSelected(!isSelected);
    }
}

export default function Item(props) {
    const { item, columnWidth, columnStartDate } = props;
    const { onResizeFinished } = useContext(OuterPropsContext);
    const { renderItem } = useContext(OuterPropsContext);
    const { startTime, endTime, drawFromRight, drawFromCenter, id, allowSelect } = item;
    const lengthInDays = endTime.diff(startTime, 'days', true);
    const rightOffset = (lengthInDays * columnWidth) - (columnWidth * (moment.duration(endTime.diff(columnStartDate)).asSeconds() / dayInSeconds));

    const [isSelected, setItemSelected] = useState(false);
    const width = (Number((lengthInDays * columnWidth).toFixed(3)));
    const leftOffset = columnWidth * (Math.abs(moment.duration(columnStartDate.diff(startTime)).asSeconds()) / dayInSeconds);

    const itemResizableWrapperRef = useRef(null);
    const leftResizerRef = useRef(null);
    const rightResizerRef = useRef(null);

    useEffect(() => {
        const _styles = getItemPositioningStyles(drawFromCenter, drawFromRight, leftOffset, rightOffset, width);
        itemResizableWrapperRef.current.style.left = _styles.left;
        itemResizableWrapperRef.current.style.width = `${width}px`;
    });

    useResizable(item, columnWidth, itemResizableWrapperRef, rightResizerRef, leftResizerRef, onResizeFinished);

    return (
        <div
            className={cx(styles.itemWrapper, {selected: isSelected})}
            ref={itemResizableWrapperRef}
            onClick={() => { handleItemClicked(allowSelect, isSelected, setItemSelected); }}
            onKeyPress={() => { handleItemClicked(allowSelect, isSelected, setItemSelected); }}
        >
            <div className={cx(styles.resizer, styles.left)} ref={leftResizerRef} />
            {renderItem({width, id, allowSelect, selected: isSelected})}
            <div className={cx(styles.resizer, styles.right)} ref={rightResizerRef} />
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
        allowSelect: PropTypes.bool,
        allowResize: PropTypes.bool
    }).isRequired,
    columnWidth: PropTypes.number.isRequired,
    columnStartDate: PropTypes.instanceOf(moment).isRequired,
};
