import { createSelector } from 'reselect';
import getHiddenStartDate from './hiddenStartDate';
import getHiddenEndDate from './hiddenEndDate';
import {formatMoment} from '../../../utils/timeUtils';

const getItems = state => state.items;

function getNormalizedItems(items, hiddenStartDate, hiddenEndDate) {
    return items.reduce((acc, currentItem) => {
        const currentStartTime = formatMoment(currentItem.startTime);
        const currentEndTime = formatMoment(currentItem.endTime);
        const drawFromRight = !currentItem.startTime.isBetween(hiddenStartDate, hiddenEndDate);
        const drawInDate = drawFromRight ? currentEndTime : currentStartTime;
        const normalizedItem = {
            ...currentItem,
            drawFromRight
        };

        return {
            ...acc,
            [currentItem.row]: {
                [drawInDate]:
                    acc[currentItem.row] && acc[currentItem.row][drawInDate]
                        ? { ...acc[currentItem.row][drawInDate], [currentItem.id]: normalizedItem }
                        : { [currentItem.id]: normalizedItem }
            }
        };
    }, {});
}

export default createSelector([getItems, getHiddenStartDate, getHiddenEndDate], getNormalizedItems);


/*
 This function helps to convert the array of items into a hash table to get access with complexity O(1)

 input:
 [
    {
        id: "1111",
        row: "abc",
        startTime: 2019-02-02, // this should come as moment object
        endTime: 2019-02-28, // this should come as moment object
    },
    {
        id: "2222",
        row: "xyz",
        startTime: 2019-02-05,
        endTime: 2019-02-27,
    },
    {
        id: "3333",
        row: "abc",
        startTime: 2019-02-02,
        endTime: 2019-02-21,
    },
    {
        id: "4444",
        row: "xyz",
        startTime: 2019-02-09,
        endTime: 2019-02-21,
    }
 ]

 output:
 {
    "abc": {
        "2019-02-02": {
            "1111": {
                id: "1111",
                row: "abc",
                startTime: 2019-02-02,
                endTime: 2019-02-28,
                drawFromRight: true/false
            },
            "3333": {
                id: "333",
                row: "abc",
                startTime: 2019-02-02,
                endTime: 2019-02-21,
                drawFromRight: true/false
            }
        }
    },
    "xyz": {
        "2019-02-05": {
            "2222": {
                id: "2222",
                row: "xyz",
                startTime: 2019-02-05,
                endTime: 2019-02-27,
                drawFromRight: true/false
            }
        },
        "2019-02-09": {
            "4444": {
                id: "4444",
                row: "xyz",
                startTime: 2019-02-09,
                endTime: 2019-02-21,
                drawFromRight: true/false
            }
        }
    }
 }
*/
