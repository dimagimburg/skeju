import {useStore} from '../../state';
import withStore from '../../state/withStore';
import Row from './Row';

const mapStoreToProps = () => {
    const {
        state: {
            startDate,
            endDate
        },
        actions: {
            setHoveredRow
        },
        computed
    } = useStore();

    return {
        startDate,
        endDate,
        setHoveredRow
    };
};

export default withStore(mapStoreToProps)(Row);
