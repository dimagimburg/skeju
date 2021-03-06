import {useStore} from '../../state';
import withStore from '../../state/withStore';
import Header from './Header';

const mapStoreToProps = () => {
    const {
        actions,
        state: {
            startDate,
            endDate
        },
        computed: {
            numberOfDays
        }
    } = useStore();

    return {
        startDate,
        endDate,
        numberOfDays
    };
};

export default withStore(mapStoreToProps)(Header);
