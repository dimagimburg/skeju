import {state, computed, setState} from '../../Store';

const setSchedulerWidth = (schedulerWidth) => {
    setState(prevState => ({
        ...prevState,
        schedulerWidth
    }));
};

const setVisibleDates = (visibleStartDate, visibleEndDate) => {
    setState(prevState => ({
        ...prevState,
        visibleStartDate,
        visibleEndDate
    }));
};

const setScrollLeftPosition = (scrollLeftPosition) => {
    setState(prevState => ({
        ...prevState,
        scrollLeftPosition
    }));
};

const setExtending = (extending) => {
    setState(prevState => ({
        ...prevState,
        extending
    }));
};

const extendSchedulerToRight = (scrollToCenterCallback) => {
    const {daysVisible} = computed;
    setExtending(true);
    setVisibleDates(state.visibleStartDate.clone().add(daysVisible, 'days'), state.visibleEndDate.clone().add(daysVisible, 'days'));
    scrollToCenterCallback();
    setExtending(false);
};

const extendSchedulerToLeft = (scrollToCenterCallback) => {
    const {daysVisible} = computed;
    setExtending(true);
    setVisibleDates(state.visibleStartDate.clone().add(-daysVisible, 'days'), state.visibleEndDate.clone().add(-daysVisible, 'days'));
    scrollToCenterCallback();
    setExtending(false);
};

const setCanBeExtended = (canBeExtended) => {
    setState(prevState => ({
        ...prevState,
        canBeExtended
    }));
};

const setItems = (items) => {
    setState((prevState) => {
        return {
            ...prevState,
            items
        };
    });
};

const actions = {
    setCanBeExtended,
    extendSchedulerToLeft,
    extendSchedulerToRight,
    setScrollLeftPosition,
    setVisibleDates,
    setSchedulerWidth,
    setItems
};

export default actions;
