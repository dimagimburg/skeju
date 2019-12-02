import moment from 'moment';

const now = moment();

export default {
    startDate: null,
    endDate: null,
    items: [],
    rows: [],
    hoveredRow: null,
    visibleStartDate: now,
    visibleEndDate: now
};
