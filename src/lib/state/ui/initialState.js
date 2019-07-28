import moment from 'moment';

const now = moment();

export default {
    schedulerWidth: 0,
    visibleStartDate: now,
    visibleEndDate: now,
    scrollLeftPosition: 0,
    canBeExtended: false,
    extending: false
};
