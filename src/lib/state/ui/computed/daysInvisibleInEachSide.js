import {createSelector} from 'reselect';
import {diffInDays} from '../../../utils/timeUtils';
import {notVisibleBufferWindowsEachSide} from '../../../constants';

const getVisibleStartDate = state => state.visibleStartDate;
const getVisibleEndDate = state => state.visibleEndDate;

function getDaysInvisibleInEachSide(initialVisibleStartDate, initialVisibleEndDate) {
    return diffInDays(initialVisibleStartDate, initialVisibleEndDate) * notVisibleBufferWindowsEachSide;
}

export default createSelector([getVisibleStartDate, getVisibleEndDate], getDaysInvisibleInEachSide);
