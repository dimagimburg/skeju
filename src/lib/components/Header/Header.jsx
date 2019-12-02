import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styles from './Header.scss';
import {OuterPropsContext} from '../../state/OuterPropsContext';

export default function Header({scrollerRef, startDate, endDate, numberOfDays}) {
    const { columnWidth, sidebarWidth, headerHeight, sidebarTitle } = useContext(OuterPropsContext);

    return (
        <div className={styles.headerWrapper} style={{height: headerHeight}}>
            <div className={styles.headerSidebar} style={{ width: sidebarWidth, minWidth: sidebarWidth, flexBasis: sidebarWidth }}>{sidebarTitle}</div>
            <div className={styles.headerContent} ref={scrollerRef}>
                {
                    [...Array(numberOfDays)].map((x, i) => (
                        <div className={styles.headerColumn} key={Math.random()} style={{width: columnWidth, minWidth: columnWidth}}>
                            {startDate.clone().add(i, 'days').format('YYYY/MM/DD')}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

Header.propTypes = {
    scrollerRef: PropTypes.object,
    startDate: PropTypes.instanceOf(moment),
    endDate: PropTypes.instanceOf(moment),
    numberOfDays: PropTypes.number
};
