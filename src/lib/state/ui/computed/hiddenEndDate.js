import {createSelector} from 'reselect';
import getDaysInvisibleInEachSide from './daysInvisibleInEachSide';

const getVisibleEndDate = state => state.visibleEndDate;

function getHiddenEndDate(visibleEndDate, daysInvisibleInEachSide) {
    console.log('getHiddenEndDate');
    return visibleEndDate.clone().add(daysInvisibleInEachSide, 'days');
}

export default createSelector([getVisibleEndDate, getDaysInvisibleInEachSide], getHiddenEndDate);
