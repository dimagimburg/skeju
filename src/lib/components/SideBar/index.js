import {useStore} from '../../state';
import withStore from '../../state/withStore';
import SideBar from './SideBar';

const mapStoreToProps = () => {
    const {
        state: {
            sidebarWidth,
            columnWidth
        },
        computed: {
            columns
        }
    } = useStore();

    return {
        columns,
        sidebarWidth,
        columnWidth
    };
};

export default withStore(mapStoreToProps)(SideBar);
