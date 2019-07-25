import {useStore} from '../../state';
import withStore from '../../state/withStore';
import Scheduler from './Scheduler';

const mapStoreToProps = () => {
    const {
        actions: {
            setSchedulerWidth,
            setInitialVisibleDates,
            setHiddenStartDate,
            setHiddenEndDate
        },
        computed: {
            columns,
            daysInvisibleInEachSide
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
        daysInvisibleInEachSide
    };
};

export default withStore(mapStoreToProps)(Scheduler);
