import {createSelector} from 'reselect';
import getDaysInvisibleInEachSide from './daysInvisibleInEachSide';

const getVisibleStartDate = state => state.visibleStartDate;

function getHiddenStartDate(visibleStartDate, daysInvisibleInEachSide) {
    return visibleStartDate.clone().add(-daysInvisibleInEachSide, 'days');
}

export default createSelector([getVisibleStartDate, getDaysInvisibleInEachSide], getHiddenStartDate);
