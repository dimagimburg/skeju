const SET_SCHEDULER_WIDTH = 'SET_SCHEDULER_WIDTH';
const SET_VISIBLE_START_DATE = 'SET_VISIBLE_START_DATE';
const SET_VISIBLE_END_DATE = 'SET_VISIBLE_END_DATE';

export default {
    SET_SCHEDULER_WIDTH,
    SET_VISIBLE_START_DATE,
    SET_VISIBLE_END_DATE
};

export function setSchedulerWidth(schedulerWidth) {
    return {
        type: SET_SCHEDULER_WIDTH,
        payload: {
            schedulerWidth
        }
    };
}

export function setVisibleStartDate(visibleStartDate) {
    return {
        type: SET_VISIBLE_START_DATE,
        payload: {
            visibleStartDate
        }
    };
}

export function setVisibleEndDate(visibleEndDate) {
    return {
        type: SET_VISIBLE_END_DATE,
        payload: {
            visibleEndDate
        }
    };
}
