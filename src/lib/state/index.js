import {Store} from './Store';
import ui from './ui';

const [SchedulerStoreProvider, useStore] = Store(
    ui
);

export {SchedulerStoreProvider, useStore};
