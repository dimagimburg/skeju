import React, {useRef, useLayoutEffect} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {useDidUpdateEffect} from '../../hooks';
import Debug from '../Debug';
import Header from '../Header';
import Column from '../Column';
import Items from '../Items/Items';
import {notVisibleBufferWindowsEachSide} from '../../constants';
import styles from './Scheduler.scss';

const Scheduler = (props) => {
    const {
        visibleStartDate, visibleEndDate, rows, items, renderItem, setSchedulerWidth, setVisibleDates, daysVisible,
        schedulerWidth, columns, setScrollLeftPosition, totalSchedulerWidth, scrollLeftPosition, columnWidth,
        extendSchedulerToRight, extendSchedulerToLeft, setCanBeExtended, canBeExtended, extending
    } = props;

    // refs
    const schedulerRef = useRef(null);

    // component load
    useLayoutEffect(() => {
        const scrollMoved = () => {
            const currentScrollLeftPosition = schedulerRef.current.scrollLeft;
            setScrollLeftPosition(currentScrollLeftPosition);
        };

        schedulerRef.current.addEventListener('scroll', scrollMoved);

        return () => { schedulerRef.current.removeEventListener('scroll', scrollMoved); };
    }, [totalSchedulerWidth]);

    // component load or update
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
            extendSchedulerToLeft(() => {
                schedulerRef.current.scrollLeft += daysVisible * columnWidth;
            });
        }

        if (canBeExtended && !extending && scrollLeftPosition > totalSchedulerWidth - schedulerWidth * 2) {
            extendSchedulerToRight(() => {
                schedulerRef.current.scrollLeft -= daysVisible * columnWidth;
            });
        }
    }, [scrollLeftPosition, schedulerWidth, totalSchedulerWidth]);

    return (
        <div className={styles.wrapper}>
            <Debug />
            <div className={styles.scheduler} ref={schedulerRef}>
                <div className={styles.rows}>
                    <Header schedulerRef={schedulerRef} />
                    {rows.map(r => (
                        <div key={r.id} className={styles.row}>
                            {
                                columns.map(column => (
                                    <Column key={column.id}>
                                        <Items
                                            row={r}
                                            items={items}
                                            renderItem={renderItem}
                                            column={column}
                                        />
                                    </Column>
                                ))
                            }
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

Scheduler.propTypes = {
    visibleStartDate: PropTypes.instanceOf(moment).isRequired,
    visibleEndDate: PropTypes.instanceOf(moment).isRequired,
    rows: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string
    })).isRequired,
    items: PropTypes.array.isRequired,
    renderItem: PropTypes.func.isRequired,
    setSchedulerWidth: PropTypes.func.isRequired,
    setVisibleDates: PropTypes.func.isRequired,
    setScrollLeftPosition: PropTypes.func.isRequired,
    schedulerWidth: PropTypes.number.isRequired,
    columns: PropTypes.array.isRequired,
    totalSchedulerWidth: PropTypes.number.isRequired,
    scrollLeftPosition: PropTypes.number.isRequired,
    extendSchedulerToLeft: PropTypes.func.isRequired,
    extendSchedulerToRight: PropTypes.func.isRequired,
    setCanBeExtended: PropTypes.func.isRequired,
    canBeExtended: PropTypes.bool.isRequired,
    extending: PropTypes.bool.isRequired,
    columnWidth: PropTypes.number.isRequired,
    daysVisible: PropTypes.number.isRequired,
};

export default Scheduler;
