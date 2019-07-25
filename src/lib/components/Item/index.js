import {useStore} from '../../state';
import withStore from '../../state/withStore';
import Item from './Item';

const mapStoreToProps = () => {
    const {
        computed: {
            columnWidth
        }
    } = useStore();

    return {
        columnWidth
    };
};

export default withStore(mapStoreToProps)(Item);
