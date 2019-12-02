import { createSelector } from 'reselect';

const getItems = state => state.items;
const getStartDate = state => state.startDate;
const getEndDate = state => state.endDate;
const getRows = state => state.rows;

function getNormalizedItems(items, rows, schedulerStartDate, schedulerEndDate) {
    const rowsIndexes = rows.reduce((acc, current, idx) => ({ ...acc, ...{ [current.id]: idx } }), {});

    return items.reduce((acc, currentItem) => {
        const {startTime, endTime} = currentItem;
        const startTimeInsideScheduler = startTime.isBetween(schedulerStartDate, schedulerEndDate);
        const endTimeInsideScheduler = endTime.isBetween(schedulerStartDate, schedulerEndDate);

        const normalizedItem = {
            ...currentItem,
            startTimeInsideScheduler,
            endTimeInsideScheduler,
            rowIndex: rowsIndexes[currentItem.row]
        };

        return {
            ...acc,
            [currentItem.row]:
                acc[currentItem.row]
                    ? [...acc[currentItem.row], normalizedItem]
                    : [normalizedItem]
        };
    }, {});
}

export default createSelector([getItems, getRows, getStartDate, getEndDate], getNormalizedItems);
