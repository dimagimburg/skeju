import React, {useEffect, useRef} from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import {StateProvider} from './state/SchedulerState';
import Items from './components/Items/Items';
import Column from './components/Column/Column';
import Header from './components/Header/Header';
import styles from './Scheduler.scss';

import initialState from './state/initialState';
import reducer from './state/reducer';
import {uiActions} from './state/actions';

import useStateValue from './hooks/useStateValue';
import useColumns from './hooks/computed/useColumns';

import {notVisibleBufferWindowsEachSide} from './constants';

const Scheduler = (props) => {
    const {
        visibleStartDate, visibleEndDate, rows, items, renderItem
    } = props;

    const {setSchedulerWidth, setVisibleStartDate, setVisibleEndDate} = uiActions;

    // state
    const [{ ui: {schedulerWidth} }, dispatch] = useStateValue();

    // computed values
    const columns = useColumns(notVisibleBufferWindowsEachSide);

    // refs
    const schedulerRef = useRef(null);

    // component load or update
    useEffect(() => {
        // update schedulerWidth
        dispatch(setSchedulerWidth(schedulerRef.current.getBoundingClientRect().width));

        // update visible start date
        dispatch(setVisibleStartDate(visibleStartDate));

        // update visible end date
        dispatch(setVisibleEndDate(visibleEndDate));

        // set horizontal scroll bar in the middle
        schedulerRef.current.scrollLeft = schedulerWidth * notVisibleBufferWindowsEachSide;
    }, [schedulerWidth]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.scheduler} ref={schedulerRef}>
                <div className={styles.rows}>
                    <Header />
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
    renderItem: PropTypes.func.isRequired
};

export default props => <StateProvider initialState={initialState} reducer={reducer}><Scheduler {...props} /></StateProvider>;