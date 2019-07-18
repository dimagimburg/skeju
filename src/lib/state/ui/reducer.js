import actions from './actions';

export default (state, action) => {
    const {
        SET_SCHEDULER_WIDTH, SET_INITIAL_VISIBLE_DATE, SET_VISIBLE_END_DATE, SET_HIDDEN_START_DATE, SET_HIDDEN_END_DATE
    } = actions;
    const {payload, type} = action;

    switch (type) {
    case SET_SCHEDULER_WIDTH:
        return {
            ...state,
            schedulerWidth: payload.schedulerWidth
        };

    case SET_INITIAL_VISIBLE_DATE:
        return {
            ...state,
            initialVisibleStartDate: payload.initialVisibleStartDate,
            initialVisibleEndDate: payload.initialVisibleEndDate
        };

    case SET_VISIBLE_END_DATE:
        return {
            ...state,
            initialVisibleEndDate: payload.visibleEndDate
        };

    case SET_HIDDEN_START_DATE:
        return {
            ...state,
            hiddenStartDate: payload.hiddenStartDate
        };

    case SET_HIDDEN_END_DATE:
        return {
            ...state,
            hiddenEndDate: payload.hiddenEndDate
        };

    default:
        return state;
    }
};
