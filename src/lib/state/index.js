import {Store} from './Store';
import {OuterPropsProvider} from './OuterPropsContext';
import ui from './ui';

const [SchedulerStoreProvider, useStore] = Store(
    ui
);

export {OuterPropsProvider, SchedulerStoreProvider, useStore};
