import React from 'react';
import {SchedulerStoreProvider, OuterPropsProvider} from './state';
import Scheduler from './components/Scheduler';

export default props => (
    <SchedulerStoreProvider>
        <OuterPropsProvider value={props}>
            <Scheduler {...props} />
        </OuterPropsProvider>
    </SchedulerStoreProvider>
);
