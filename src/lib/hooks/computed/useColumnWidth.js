import {useMemo} from 'react';
import useStateValue from '../useStateValue';
import useDaysVisible from './useDaysVisible';

export default function useColumnWidth() {
    const [{ ui: {schedulerWidth, visibleStartDate, visibleEndDate} }, dispatch] = useStateValue();
    const daysVisible = useDaysVisible();

    return useMemo(
        () => schedulerWidth / daysVisible,
        [schedulerWidth, visibleStartDate, visibleEndDate]
    );
}