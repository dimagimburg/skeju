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
            columns,
            daysInvisibleInEachSide,
            totalSchedulerWidth
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
        columns,
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
        extending
    };
};

export default withStore(mapStoreToProps)(Scheduler);
