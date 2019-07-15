import {useMemo} from 'react';
import useStateValue from '../useStateValue';

export default function useColumns() {
    const [{ ui: {hiddenStartDate, hiddenEndDate} }, dispatch] = useStateValue();

    return useMemo(
        () => {
            const cols = [];

            // visible dates are the diffInDays between visibleStartDate and visibleEndDate
            // which are the visible window, but actually rendered one more window to
            // the left, and one more window to the right.
            for (let i = hiddenStartDate; i < hiddenEndDate; i = i.clone().add(1, 'days')) {
                cols.push({
                    id: i.format('DD/MM'),
                    startDate: i.clone(),
                    endDate: i.clone().add(1, 'days')
                });
            }
            return cols;
        },
        [hiddenStartDate, hiddenEndDate]
    );
}
