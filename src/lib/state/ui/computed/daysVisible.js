import {createSelector} from 'reselect';
import {diffInDays} from '../../../utils/timeUtils';

const getVisibleStartDate = state => state.visibleStartDate;
const getVisibleEndDate = state => state.visibleEndDate;

function getDaysVisible(initialVisibleStartDate, initialVisibleEndDate) {
    return diffInDays(initialVisibleStartDate, initialVisibleEndDate);
}

export default createSelector([getVisibleStartDate, getVisibleEndDate], getDaysVisible);
