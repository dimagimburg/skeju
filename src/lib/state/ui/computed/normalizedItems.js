import moment from 'moment';
import { createSelector } from 'reselect';
import getHiddenStartDate from './hiddenStartDate';
import getHiddenEndDate from './hiddenEndDate';
import {formatMoment} from '../../../utils/timeUtils';

const getItems = state => state.items;

function getNormalizedItems(items, hiddenStartDate, hiddenEndDate) {
    return items.reduce((acc, currentItem) => {
        let drawInDate;
        const {startTime, endTime} = currentItem;
        // when items right side is between hiddenStartDate and hiddenEndDate
        const drawFromRight = !startTime.isBetween(hiddenStartDate, hiddenEndDate);

        // when items left side is before hiddenStartDate and right side is after rightStartDate
        const drawFromCenter = startTime.isBefore(hiddenStartDate) && endTime.isAfter(hiddenEndDate);

        // decide from what date the item should be drawn
        // if drawn from center then draw it from the center of hiddenStartDate and hiddenEndDAte
        // if drawn from right - end date
        // if drawn from left - start date
        if (drawFromCenter) {
            // get the middle date
            drawInDate = hiddenStartDate.clone().add(Math.abs(moment.duration(hiddenEndDate.diff(hiddenStartDate)).asSeconds() / 2), 'seconds');
        } else {
            drawInDate = drawFromRight ? endTime : startTime;
        }

        drawInDate = formatMoment(drawInDate);

        const normalizedItem = {
            ...currentItem,
            drawFromRight,
            drawFromCenter
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
