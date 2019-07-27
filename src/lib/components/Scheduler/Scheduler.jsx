import React, {useRef, useEffect, useLayoutEffect} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styles from './Scheduler.scss';
import Debug from '../Debug';
import Header from '../Header';
import Column from '../Column';
import Items from '../Items/Items';
import {notVisibleBufferWindowsEachSide} from '../../constants';

const Scheduler = (props) => {
    const {
        visibleStartDate, visibleEndDate, rows, items, renderItem,
        setSchedulerWidth, setInitialVisibleDates, setHiddenEndDate, setHiddenStartDate,
        schedulerWidth, columns, daysInvisibleInEachSide, setScrollLeftPosition,
        totalSchedulerWidth
    } = props;

    // refs
    const schedulerRef = useRef(null);

    // component load
    useLayoutEffect(() => {
        const scrollMoved = () => {
            const currentScrollLeftPosition = schedulerRef.current.scrollLeft;
            console.log(totalSchedulerWidth);
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
        setInitialVisibleDates(visibleStartDate, visibleEndDate);

        setTimeout(() => {
            // set horizontal scroll bar in the middle
            const initialScrollLeftPosition = schedulerWidth * notVisibleBufferWindowsEachSide;
            schedulerRef.current.scrollLeft = initialScrollLeftPosition;
            setScrollLeftPosition(initialScrollLeftPosition);
        }, 0);
    }, [schedulerWidth, visibleStartDate, visibleEndDate]);

    // on update
    useEffect(() => {
        // update hidden dates
        setHiddenStartDate(visibleStartDate.clone().add(-daysInvisibleInEachSide, 'days'));
        setHiddenEndDate(visibleEndDate.clone().add(daysInvisibleInEachSide, 'days'));
    }, [daysInvisibleInEachSide]);

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
    setInitialVisibleDates: PropTypes.func.isRequired,
    setHiddenStartDate: PropTypes.func.isRequired,
    setHiddenEndDate: PropTypes.func.isRequired,
    setScrollLeftPosition: PropTypes.func.isRequired,
    schedulerWidth: PropTypes.number.isRequired,
    columns: PropTypes.array.isRequired,
    daysInvisibleInEachSide: PropTypes.number.isRequired,
    totalSchedulerWidth: PropTypes.number.isRequired,
};

export default Scheduler;
