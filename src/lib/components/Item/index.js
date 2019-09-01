import {useStore} from '../../state';
import withStore from '../../state/withStore';
import Item from './Item';

const mapStoreToProps = () => {
    const {
        state: {
            visibleStartDate
        },
        computed: {
            columnWidth
        }
    } = useStore();

    return {
        columnWidth,
        visibleStartDate
    };
};

export default withStore(mapStoreToProps)(Item);
