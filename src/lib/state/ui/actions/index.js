export default ({ state, setState }) => {
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

    const extendSchedulerToRight = () => {
        setExtending(true);
        console.log('expanding to right');
    };

    const extendSchedulerToLeft = () => {
        setExtending(true);
        console.log('expanding to left');
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
