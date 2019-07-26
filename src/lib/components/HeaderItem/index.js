import {useStore} from '../../state';
import withStore from '../../state/withStore';
import HeaderItem from './HeaderItem';

const mapStoreToProps = () => {
    const {
        actions: {
            setLeftVisibleDate
        },
        computed: {
            columnWidth
        }
    } = useStore();

    return {
        setLeftVisibleDate,
        columnWidth
    };
};

export default withStore(mapStoreToProps)(HeaderItem);
