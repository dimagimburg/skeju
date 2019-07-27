export default ({ state, setState }) => {
    const setSchedulerWidth = (schedulerWidth) => {
        setState(prevState => ({
            ...prevState,
            schedulerWidth
        }));
    };

    const setInitialVisibleDates = (initialVisibleStartDate, initialVisibleEndDate) => {
        setState(prevState => ({
            ...prevState,
            initialVisibleStartDate,
            initialVisibleEndDate
        }));
    };

    const setHiddenStartDate = (hiddenStartDate) => {
        setState(prevState => ({
            ...prevState,
            hiddenStartDate
        }));
    };

    const setHiddenEndDate = (hiddenEndDate) => {
        setState(prevState => ({
            ...prevState,
            hiddenEndDate
        }));
    };

    const setScrollLeftPosition = (scrollLeftPosition) => {
        setState(prevState => ({
            ...prevState,
            scrollLeftPosition
        }));
    };

    return {
        setSchedulerWidth,
        setInitialVisibleDates,
        setHiddenStartDate,
        setHiddenEndDate,
        setScrollLeftPosition
    };
};
