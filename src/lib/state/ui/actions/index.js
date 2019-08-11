let _state;
let _computed;
let _setState;

const setSchedulerWidth = (schedulerWidth) => {
    _setState(prevState => ({
        ...prevState,
        schedulerWidth
    }));
};

const setVisibleDates = (visibleStartDate, visibleEndDate) => {
    _setState(prevState => ({
        ...prevState,
        visibleStartDate,
        visibleEndDate
    }));
};

const setScrollLeftPosition = (scrollLeftPosition) => {
    _setState(prevState => ({
        ...prevState,
        scrollLeftPosition
    }));
};

const setExtending = (extending) => {
    _setState(prevState => ({
        ...prevState,
        extending
    }));
};

const extendSchedulerToRight = (scrollToCenterCallback) => {
    const {daysVisible} = _computed;
    setExtending(true);
    setVisibleDates(_state.visibleStartDate.clone().add(daysVisible, 'days'), _state.visibleEndDate.clone().add(daysVisible, 'days'));
    scrollToCenterCallback();
    setExtending(false);
};

const extendSchedulerToLeft = (scrollToCenterCallback) => {
    const {daysVisible} = _computed;
    setExtending(true);
    setVisibleDates(_state.visibleStartDate.clone().add(-daysVisible, 'days'), _state.visibleEndDate.clone().add(-daysVisible, 'days'));
    scrollToCenterCallback();
    setExtending(false);
};

const setCanBeExtended = (canBeExtended) => {
    _setState(prevState => ({
        ...prevState,
        canBeExtended
    }));
};

const actions = {
    setCanBeExtended,
    extendSchedulerToLeft,
    extendSchedulerToRight,
    setExtending,
    setScrollLeftPosition,
    setVisibleDates,
    setSchedulerWidth
};

export default ({ state, computed, setState }) => {
    _state = state;
    _computed = computed;
    _setState = setState;
    return actions;
};
