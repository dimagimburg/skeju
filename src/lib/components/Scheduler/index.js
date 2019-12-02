import {useStore} from '../../state';
import withStore from '../../state/withStore';
import Scheduler from './Scheduler';

const mapStoreToProps = () => {
    const {
        state: {
            hoveredRow
        },
        actions: {
            setHoveredRow
        },
        computed: {
            numberOfDays,
            normalizedItems
        }
    } = useStore();

    return {
        hoveredRow,
        setHoveredRow,
        numberOfDays,
        normalizedItems
    };
};

export default withStore(mapStoreToProps)(Scheduler);
