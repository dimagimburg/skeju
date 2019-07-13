import {useMemo} from 'react';
import useStateValue from '../useStateValue';
import {diffInDays} from '../../utils/timeUtils';

export default function useColumns(notVisibleBufferWindowsEachSide) {
    const [{ ui: {visibleStartDate, visibleEndDate} }, dispatch] = useStateValue();

    const daysInvisibleEachSide = diffInDays(visibleStartDate, visibleEndDate) * notVisibleBufferWindowsEachSide;
    const renderedStartDate = visibleStartDate.clone().add(-daysInvisibleEachSide, 'days');
    const renderedEndDate = visibleEndDate.clone().add(daysInvisibleEachSide, 'days');

    return useMemo(
        () => {
            const cols = [];

            // visible dates are the diffInDays between visibleStartDate and visibleEndDate
            // which are the visible window, but actually rendered one more window to
            // the left, and one more window to the right.
            for (let i = renderedStartDate; i < renderedEndDate; i = i.clone().add(1, 'days')) {
                cols.push({
                    id: i.format('DD/MM'),
                    startDate: i.clone(),
                    endDate: i.clone().add(1, 'days')
                });
            }
            return cols;
        },
        [visibleStartDate, visibleEndDate]
    );
}
