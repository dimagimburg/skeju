import React, {useLayoutEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './HeaderItem.scss';
import {isChildVisibleHorizontallyInsideParent} from '../../utils/uiUtils';

export default function HeaderItem(props) {
    const {
        schedulerRef,
        column: {id, startDate},
        setLeftVisibleDate,
        columnWidth
    } = props;

    const itemRef = useRef(null);
    const [visible, setVisible] = useState(false);
    const [x, setX] = useState(0);

    useLayoutEffect(() => {
        function visibilityHandler(e) {
            if (isChildVisibleHorizontallyInsideParent(schedulerRef.current, itemRef.current)) {
                // here push the value inside a place that decides if it is the man or the min and exposes it as a global state.
                // maybe use the reducer
                setVisible(true);
                // dispatch(setLeftVisibleDate(startDate));
            } else {
                setVisible(false);
            }
        }

        schedulerRef.current.addEventListener('scroll', visibilityHandler);

        return () => { schedulerRef.current.removeEventListener('scroll', visibilityHandler); };
    });

    return (
        <div style={{width: `${columnWidth}px`}} className={cx(styles.headerColumn, visible ? styles.visible : '')} ref={itemRef}>
            !{id}!
        </div>

    );
}

HeaderItem.propTypes = {
    schedulerRef: PropTypes.any.isRequired,
    column: PropTypes.any.isRequired,
    setLeftVisibleDate: PropTypes.func.isRequired,
    columnWidth: PropTypes.number.isRequired,
};
