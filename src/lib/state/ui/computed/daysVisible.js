import {createSelector} from 'reselect';
import {diffInDays} from '../../../utils/timeUtils';

const getInitialVisibleStartDate = state => state.initialVisibleStartDate;
const getInitialVisibleEndDate = state => state.initialVisibleEndDate;

function getDaysVisible(initialVisibleStartDate, initialVisibleEndDate) {
    return diffInDays(initialVisibleStartDate, initialVisibleEndDate);
}

export default createSelector([getInitialVisibleStartDate, getInitialVisibleEndDate], getDaysVisible);
