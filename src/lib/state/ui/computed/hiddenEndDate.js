import {createSelector} from 'reselect';
import getDaysInvisibleInEachSide from './daysInvisibleInEachSide';

const getVisibleEndDate = state => state.visibleEndDate;

function getHiddenEndDate(visibleEndDate, daysInvisibleInEachSide) {
    return visibleEndDate.clone().add(daysInvisibleInEachSide, 'days');
}

export default createSelector([getVisibleEndDate, getDaysInvisibleInEachSide], getHiddenEndDate);
