import {useStore} from '../../state';
import withStore from '../../state/withStore';
import Items from './Items';

const mapStoreToProps = () => {
    const {
        state: {
            scrollLeftPosition
        },
        computed: {
            columnWidth,
            normalizedItems
        }
    } = useStore();

    return {
        columnWidth,
        scrollLeftPosition,
        normalizedItems
    };
};

export default withStore(mapStoreToProps)(Items);
