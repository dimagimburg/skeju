import {useMemo} from 'react';
import useStateValue from '../useStateValue';
import useDaysVisible from './useDaysVisible';
import useColumns from './useColumns';

export default function useBoundDates() {
    const columns = useColumns();
    const [{ ui: {visibleStartDate, visibleEndDate} }, dispatch] = useStateValue();
    const daysVisible = useDaysVisible();

    return useMemo(
        () => schedulerWidth / daysVisible,
        [schedulerWidth, visibleStartDate, visibleEndDate]
    );
}
