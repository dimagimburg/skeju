import {useStore} from '../../state';
import withStore from '../../state/withStore';
import Columns from './Columns';

const mapStoreToProps = () => {
    const {
        computed: {
            columns
        }
    } = useStore();

    return {
        columns
    };
};

export default withStore(mapStoreToProps)(Columns);
