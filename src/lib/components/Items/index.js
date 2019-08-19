import {useStore} from '../../state';
import withStore from '../../state/withStore';
import Items from './Items';

const mapStoreToProps = () => {
    const {
        state: {
            scrollLeftPosition
        },
        computed: {
            columnWidth
        }
    } = useStore();

    return {
        columnWidth,
        scrollLeftPosition
    };
};

export default withStore(mapStoreToProps)(Items);
