import {useStore} from '../../state';
import withStore from '../../state/withStore';
import Item from './Item';

const mapStoreToProps = () => {
    const {
        computed: {
            columnWidth,
            hiddenStartDate,
            hiddenEndDate
        }
    } = useStore();

    return {
        columnWidth,
        hiddenStartDate,
        hiddenEndDate
    };
};

export default withStore(mapStoreToProps)(Item);
