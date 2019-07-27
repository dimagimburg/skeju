import {useStore} from '../../state';
import withStore from '../../state/withStore';
import Scheduler from './Scheduler';

const mapStoreToProps = () => {
    const {
        actions: {
            setSchedulerWidth,
            setInitialVisibleDates,
            setHiddenStartDate,
            setHiddenEndDate,
            setScrollLeftPosition
        },
        computed: {
            columns,
            daysInvisibleInEachSide,
            totalSchedulerWidth
        },
        state: {
            schedulerWidth
        }
    } = useStore();

    return {
        setSchedulerWidth,
        columns,
        schedulerWidth,
        setInitialVisibleDates,
        setHiddenStartDate,
        setHiddenEndDate,
        daysInvisibleInEachSide,
        setScrollLeftPosition,
        totalSchedulerWidth
    };
};

export default withStore(mapStoreToProps)(Scheduler);
