import {createSelector} from 'reselect';
import getDaysVisible from './daysVisible';

const getSchedulerWidth = state => state.schedulerWidth;

function getColumnWidth(schedulerWidth, daysVisible) {
    return schedulerWidth / daysVisible;
}

export default createSelector([getSchedulerWidth, getDaysVisible], getColumnWidth);
