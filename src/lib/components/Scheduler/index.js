import {useStore} from '../../state';
import withStore from '../../state/withStore';
import Scheduler from './Scheduler';

const mapStoreToProps = () => {
    const {
        actions: {
            setSchedulerWidth,
            setVisibleDates,
            setScrollLeftPosition,
            extendSchedulerToRight,
            extendSchedulerToLeft,
            setCanBeExtended
        },
        computed: {
            daysInvisibleInEachSide,
            totalSchedulerWidth,
            columnWidth,
            daysVisible
        },
        state: {
            schedulerWidth,
            scrollLeftPosition,
            canBeExtended,
            extending
        }
    } = useStore();

    return {
        setSchedulerWidth,
        schedulerWidth,
        setVisibleDates,
        daysInvisibleInEachSide,
        setScrollLeftPosition,
        totalSchedulerWidth,
        scrollLeftPosition,
        extendSchedulerToRight,
        extendSchedulerToLeft,
        setCanBeExtended,
        canBeExtended,
        extending,
        columnWidth,
        daysVisible
    };
};

export default withStore(mapStoreToProps)(Scheduler);
