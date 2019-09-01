import {useStore} from '../../state';
import withStore from '../../state/withStore';
import Scheduler from './Scheduler';

const mapStoreToProps = () => {
    const {
        actions,
        computed: {
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

    const {
        setSchedulerWidth, setVisibleDates, setScrollLeftPosition, extendSchedulerToRight, extendSchedulerToLeft,
        setCanBeExtended, setItems
    } = actions();

    return {
        setSchedulerWidth,
        schedulerWidth,
        setVisibleDates,
        setScrollLeftPosition,
        totalSchedulerWidth,
        scrollLeftPosition,
        extendSchedulerToRight,
        extendSchedulerToLeft,
        setCanBeExtended,
        canBeExtended,
        extending,
        columnWidth,
        daysVisible,
        setItems
    };
};

export default withStore(mapStoreToProps)(Scheduler);
