import React, { useContext } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import {OuterPropsContext} from '../../state/OuterPropsContext';

export default function Header({sidebarWidth, columnWidth}) {
    // const { linesColor: borderColor, startTime, endTime } = useContext(OuterPropsContext);
    // const startTimeStartDay = startTime.startOf('day');
    // const endTimeStartDay = endTime.startOf('day');
    // const numberOfDays = moment.duration(endTimeStartDay - startTimeStartDay).asDays();
    // const width = totalWidth / numberOfDays;
    // const headerItems = Array.from(Array(numberOfDays)).map((item, index) => <div key={Math.random()} className={styles.headerItem} style={{width}}>something</div>);
    const { numberOfColumns, headerHeight } = useContext(OuterPropsContext);

    return (
        <div className={styles.wrapper}>
            <div className={styles.sideBarHeader} style={{height: headerHeight}}>headersidebar</div>
            <div className={styles.sideBarScheduler}>schedulersidebar</div>
        </div>
    );
}

Header.propTypes = {
    sidebarWidth: PropTypes.number,
    columnWidth: PropTypes.number
};
