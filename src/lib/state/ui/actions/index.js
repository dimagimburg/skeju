import {state, computed, setState} from '../../Store';

const setStartDate = (startDate) => {
    setState(prevState => ({ ...prevState, startDate }));
};

const setEndDate = (endDate) => {
    setState(prevState => ({ ...prevState, endDate }));
};

const setItems = (items) => {
    setState(prevState => ({ ...prevState, items }));
};

const setRows = (rows) => {
    setState(prevState => ({ ...prevState, rows }));
};

const setHoveredRow = (hoveredRow) => {
    setState(prevState => ({ ...prevState, hoveredRow }));
};

const actions = {
    setStartDate,
    setEndDate,
    setItems,
    setRows,
    setHoveredRow
};

export default actions;
