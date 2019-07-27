import {useStore} from '../../state';
import withStore from '../../state/withStore';
import Debug from './Debug';

const mapStoreToProps = () => {
    const {
        state, computed
    } = useStore();

    return {
        state,
        computed
    };
};

export default withStore(mapStoreToProps)(Debug);
