import {useStore} from '../../state';
import withStore from '../../state/withStore';
import Scheduler from './Skeju';

const mapStoreToProps = () => {
    const {
        actions: {
            setStartDate,
            setEndDate,
            setItems,
            setRows
        },
        computed,
        state
    } = useStore();

    return {
        setStartDate,
        setEndDate,
        setItems,
        setRows
    };
};

export default withStore(mapStoreToProps)(Scheduler);
