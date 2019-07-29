export default ({ state, computed, setState }) => {
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

    return {
        setSchedulerWidth,
        setVisibleDates,
        setScrollLeftPosition,
        extendSchedulerToRight,
        extendSchedulerToLeft,
        setCanBeExtended
    };
};
