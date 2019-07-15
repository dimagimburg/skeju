import {useMemo} from 'react';
import useStateValue from '../useStateValue';
import {diffInDays} from '../../utils/timeUtils';
import {notVisibleBufferWindowsEachSide} from '../../constants';

export default function useDaysInvisibleInEachSide() {
    const [{ ui: {visibleStartDate, visibleEndDate} }, dispatch] = useStateValue();
    const daysInvisibleEachSide = diffInDays(visibleStartDate, visibleEndDate) * notVisibleBufferWindowsEachSide;

    return useMemo(
        () => daysInvisibleEachSide,
        [visibleStartDate, visibleEndDate]
    );
}
