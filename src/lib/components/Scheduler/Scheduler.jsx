import React, {useRef, useLayoutEffect, useContext, useEffect} from 'react';
import PropTypes from 'prop-types';
import {useDidUpdateEffect, useTraceUpdate} from '../../hooks';
import Debug from '../Debug';
import Header from '../Header';
import {notVisibleBufferWindowsEachSide} from '../../constants';
import Rows from '../Rows';
import styles from './Scheduler.scss';


const Scheduler = (props) => {
    const {
        setSchedulerWidth, setVisibleDates, daysVisible, schedulerWidth, setScrollLeftPosition, totalSchedulerWidth,
        scrollLeftPosition, columnWidth, extendSchedulerToRight, extendSchedulerToLeft, setCanBeExtended,
        canBeExtended, extending, setItems, visibleStartDate, visibleEndDate, items
    } = props;

    useTraceUpdate(props);

    // refs
    const schedulerRef = useRef(null);

    // component loaded and not yet drawn
    useEffect(() => { setItems(items); }, [items]);

    // component load and drawn
    useLayoutEffect(() => {
        const scrollMoved = () => {
            const currentScrollLeftPosition = schedulerRef.current.scrollLeft;
            setScrollLeftPosition(currentScrollLeftPosition);
        };

        schedulerRef.current.addEventListener('scroll', scrollMoved);

        return () => { schedulerRef.current.removeEventListener('scroll', scrollMoved); };
    }, [totalSchedulerWidth]);

    // component load or updated visibleStartDate, visibleEndDate or schedulerWidth (e.g resize)
    useLayoutEffect(() => {
        // update schedulerWidth
        setSchedulerWidth(schedulerRef.current.getBoundingClientRect().width);

        // update visible date
        setVisibleDates(visibleStartDate, visibleEndDate);

        setTimeout(() => {
            // set horizontal scroll bar in the middle
            const initialScrollLeftPosition = schedulerWidth * notVisibleBufferWindowsEachSide;
            schedulerRef.current.scrollLeft = initialScrollLeftPosition;
            setScrollLeftPosition(initialScrollLeftPosition);
            setCanBeExtended(true);
        }, 0);
    }, [schedulerWidth, visibleStartDate, visibleEndDate]);

    // react on scroll move
    useDidUpdateEffect(() => {
        if (canBeExtended && !extending && scrollLeftPosition < schedulerWidth) {
            extendSchedulerToLeft(() => { schedulerRef.current.scrollLeft += daysVisible * columnWidth; });
        }

        if (canBeExtended && !extending && scrollLeftPosition > totalSchedulerWidth - schedulerWidth * 2) {
            extendSchedulerToRight(() => { schedulerRef.current.scrollLeft -= daysVisible * columnWidth; });
        }
    }, [scrollLeftPosition, schedulerWidth, totalSchedulerWidth]);

    return (
        <div className={styles.wrapper}>
            <Debug />
            <div className={styles.scheduler} ref={schedulerRef}>
                <div className={styles.contentWrapper}>
                    <Header schedulerRef={schedulerRef} />
                    <Rows />
                </div>
            </div>
        </div>
    );
};

Scheduler.propTypes = {
    setSchedulerWidth: PropTypes.func.isRequired,
    setVisibleDates: PropTypes.func.isRequired,
    setScrollLeftPosition: PropTypes.func.isRequired,
    schedulerWidth: PropTypes.number.isRequired,
    totalSchedulerWidth: PropTypes.number.isRequired,
    scrollLeftPosition: PropTypes.number.isRequired,
    extendSchedulerToLeft: PropTypes.func.isRequired,
    extendSchedulerToRight: PropTypes.func.isRequired,
    setCanBeExtended: PropTypes.func.isRequired,
    canBeExtended: PropTypes.bool.isRequired,
    extending: PropTypes.bool.isRequired,
    columnWidth: PropTypes.number.isRequired,
    daysVisible: PropTypes.number.isRequired,
    setItems: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    visibleStartDate: PropTypes.any.isRequired,
    visibleEndDate: PropTypes.any.isRequired,
};

export default Scheduler;
