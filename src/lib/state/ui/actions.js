const SET_SCHEDULER_WIDTH = 'SET_SCHEDULER_WIDTH';
const SET_VISIBLE_DATE = 'SET_VISIBLE_DATE';
const SET_HIDDEN_START_DATE = 'SET_HIDDEN_START_DATE';
const SET_HIDDEN_END_DATE = 'SET_HIDDEN_END_DATE';

export default {
    SET_SCHEDULER_WIDTH,
    SET_VISIBLE_DATE,
    SET_HIDDEN_START_DATE,
    SET_HIDDEN_END_DATE
};

export function setSchedulerWidth(schedulerWidth) {
    return {
        type: SET_SCHEDULER_WIDTH,
        payload: {
            schedulerWidth
        }
    };
}

export function setVisibleDate(visibleStartDate, visibleEndDate) {
    return {
        type: SET_VISIBLE_DATE,
        payload: {
            visibleStartDate,
            visibleEndDate
        }
    };
}

export function setHiddenStartDate(hiddenStartDate) {
    return {
        type: SET_HIDDEN_START_DATE,
        payload: {
            hiddenStartDate
        }
    };
}

export function setHiddenEndDate(hiddenEndDate) {
    return {
        type: SET_HIDDEN_END_DATE,
        payload: {
            hiddenEndDate
        }
    };
}
