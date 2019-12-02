import React, { useRef, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';


import Scheduler from '../Scheduler';
import Header from '../Header';

import useSyncScrollers from '../../hooks/useSyncScrollers';

import styles from './Skeju.scss';
import {OuterPropsContext} from '../../state/OuterPropsContext';
import Debug from '../Debug';

const Skeju = (props) => {
    const { setStartDate, setEndDate, setItems, setRows } = props;
    const { displayType, startDate, endDate, items, rows } = useContext(OuterPropsContext);
    const [headerScrollerRef, schedulerScrollerRef] = [useRef(null), useRef(null)];

    useEffect(() => {
        const actualStartDate = startDate.clone().startOf('day');
        let actualEndDate = endDate.clone().startOf('day');
        if (actualEndDate < actualStartDate) {
            actualEndDate = startDate.clone().endOf('day');
        }

        setStartDate(actualStartDate);
        setEndDate(actualEndDate);
        setRows(rows);
        setItems(items);
    }, [startDate, endDate, items, rows]);

    useSyncScrollers(headerScrollerRef, schedulerScrollerRef);

    return (
        <div className={styles.wrapper}>
            {displayType}
            <Header scrollerRef={headerScrollerRef} />
            <Scheduler scrollerRef={schedulerScrollerRef} />
            <Debug />
        </div>
    );
};

Skeju.propTypes = {
    setStartDate: PropTypes.func.isRequired,
    setEndDate: PropTypes.func.isRequired,
    setItems: PropTypes.func.isRequired,
    setRows: PropTypes.func.isRequired
};

export default Skeju;
