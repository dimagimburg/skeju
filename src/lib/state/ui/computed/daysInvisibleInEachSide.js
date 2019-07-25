import {createSelector} from 'reselect';
import {diffInDays} from '../../../utils/timeUtils';
import {notVisibleBufferWindowsEachSide} from '../../../constants';

const getInitialVisibleStartDate = state => state.initialVisibleStartDate;
const getInitialVisibleEndDate = state => state.initialVisibleEndDate;

function getDaysInvisibleInEachSide(initialVisibleStartDate, initialVisibleEndDate) {
    return diffInDays(initialVisibleStartDate, initialVisibleEndDate) * notVisibleBufferWindowsEachSide;
}

export default createSelector([getInitialVisibleStartDate, getInitialVisibleEndDate], getDaysInvisibleInEachSide);
