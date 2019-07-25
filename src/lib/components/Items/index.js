import {useStore} from '../../state';
import withStore from '../../state/withStore';
import Items from './Items';

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

export default withStore(mapStoreToProps)(Items);
