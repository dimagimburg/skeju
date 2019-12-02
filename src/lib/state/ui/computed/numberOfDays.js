import { createSelector } from 'reselect';

const getStartDate = state => state.startDate;
const getEndDate = state => state.endDate;

function getNumberOfDays(startDate, endDate) {
    if (startDate && endDate) {
        return Math.abs(startDate.diff(endDate, 'day'));
    }
    return 0;
}

export default createSelector([getStartDate, getEndDate], getNumberOfDays);
