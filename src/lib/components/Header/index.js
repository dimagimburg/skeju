import {useStore} from '../../state';
import withStore from '../../state/withStore';
import Header from './Header';

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

export default withStore(mapStoreToProps)(Header);
