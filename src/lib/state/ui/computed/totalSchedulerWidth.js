import {createSelector} from 'reselect';
import getDaysVisible from './daysVisible';
import getDaysInvisibleInEachSide from './daysInvisibleInEachSide';
import getColumnWidth from './columnWidth';

function getTotalSchedulerWidth(columnWidth, daysInvisibleInEachSide, daysVisible) {
    console.log(columnWidth, daysInvisibleInEachSide, daysVisible, columnWidth * (daysVisible + daysInvisibleInEachSide * 2));
    return columnWidth * (daysVisible + daysInvisibleInEachSide * 2);
}

export default createSelector([getColumnWidth, getDaysInvisibleInEachSide, getDaysVisible], getTotalSchedulerWidth);
