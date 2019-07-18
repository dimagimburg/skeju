import {useMemo} from 'react';
import useStateValue from '../useStateValue';
import {diffInDays} from '../../utils/timeUtils';
import {notVisibleBufferWindowsEachSide} from '../../constants';

export default function useDaysInvisibleInEachSide() {
    const [{ ui: {initialVisibleStartDate, initialVisibleEndDate} }, dispatch] = useStateValue();

    const daysInvisibleEachSide = diffInDays(initialVisibleStartDate, initialVisibleEndDate) * notVisibleBufferWindowsEachSide;

    return useMemo(
        () => daysInvisibleEachSide,
        [initialVisibleStartDate, initialVisibleEndDate]
    );
}
