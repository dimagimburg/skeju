import {createSelector} from 'reselect';
import getHiddenStartDate from './hiddenStartDate';
import getHiddenEndDate from './hiddenEndDate';


function getColumns(hiddenStartDate, hiddenEndDate) {
    const cols = [];
    // visible dates are the diffInDays between initialVisibleStartDate and initialVisibleEndDate
    // which are the visible window, but actually rendered one more window to
    // the left, and one more window to the right.
    for (let i = hiddenStartDate; i < hiddenEndDate; i = i.clone().add(1, 'days')) {
        cols.push({
            id: i.format('DD/MM'),
            startDate: i.clone().startOf('day'),
            endDate: i.clone().add(1, 'days').startOf('day')
        });
    }
    return cols;
}

export default createSelector([getHiddenStartDate, getHiddenEndDate], getColumns);
