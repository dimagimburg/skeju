import {useMemo} from 'react';
import useStateValue from '../useStateValue';
import {diffInDays} from '../../utils/timeUtils';

export default function useDaysVisible() {
    const [{ ui: {initialVisibleStartDate, initialVisibleEndDate} }, dispatch] = useStateValue();
    return useMemo(
        () => diffInDays(initialVisibleStartDate, initialVisibleEndDate),
        [initialVisibleStartDate, initialVisibleEndDate]
    );
}
