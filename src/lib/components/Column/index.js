import {useStore} from '../../state';
import withStore from '../../state/withStore';
import Column from './Column';

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

export default withStore(mapStoreToProps)(Column);
