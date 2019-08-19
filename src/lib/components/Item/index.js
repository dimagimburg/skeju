import {useStore} from '../../state';
import withStore from '../../state/withStore';
import Item from './Item';

const mapStoreToProps = () => {
    const {
        state: {
            visibleStartDate
        },
        computed: {
            columnWidth,
            hiddenStartDate,
            hiddenEndDate
        }
    } = useStore();

    return {
        columnWidth,
        hiddenStartDate,
        hiddenEndDate,
        visibleStartDate
    };
};

export default withStore(mapStoreToProps)(Item);
