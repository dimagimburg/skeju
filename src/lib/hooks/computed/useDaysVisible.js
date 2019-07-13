import {useMemo} from 'react';
import useStateValue from '../useStateValue';
import {diffInDays} from '../../utils/timeUtils';

export default function useDaysVisible() {
    const [{ ui: {visibleStartDate, visibleEndDate} }, dispatch] = useStateValue();

    return useMemo(
        () => diffInDays(visibleStartDate, visibleEndDate),
        [visibleStartDate, visibleEndDate]
    );
}
