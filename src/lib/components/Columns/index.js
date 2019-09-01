import {useStore} from '../../state';
import withStore from '../../state/withStore';
import Columns from './Columns';

const mapStoreToProps = () => {
    const {
        computed: {
            columns,
            normalizedItems
        }
    } = useStore();

    return {
        columns,
        normalizedItems
    };
};

export default withStore(mapStoreToProps)(Columns);
