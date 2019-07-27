import moment from 'moment';

const now = moment();

export default {
    schedulerWidth: 0,
    initialVisibleStartDate: now,
    initialVisibleEndDate: now,
    hiddenStartDate: now,
    hiddenEndDate: now,
    leftVisibleDate: null,
    rightVisibleDate: null,
    scrollLeftPosition: 0
};
