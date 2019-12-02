import React, {useContext} from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import {OuterPropsContext} from '../../state/OuterPropsContext';

export default function Row({ id, items, startDate, setHoveredRow }) {
    const { rowHeight: height, columnWidth } = useContext(OuterPropsContext);
    const paddingTopAndBottom = 5;
    const itemHeight = height - 2 * paddingTopAndBottom;

    return (
        <div className={styles.schedulerRow} style={{ height }} onMouseEnter={() => { setHoveredRow(id); }} onMouseLeave={() => { setHoveredRow(null); }}>
            {items && items.map((item) => {
                const width = (item.endTime.diff(item.startTime, 'seconds') / 60 / 60 / 24) * columnWidth;
                const offsetLeft = (item.startTime.diff(startDate, 'seconds') / 60 / 60 / 24) * columnWidth;
                const top = (item.rowIndex * height) + 5;
                return (
                    <div
                        key={item.id}
                        className={styles.item}
                        style={{ top, width, height: itemHeight, left: offsetLeft }}
                    >
                        {item.id}
                    </div>
                );
            })}
        </div>
    );
}

Row.propTypes = {
    id: PropTypes.any,
    items: PropTypes.array,
    startDate: PropTypes.instanceOf(moment),
    setHoveredRow: PropTypes.func
};
