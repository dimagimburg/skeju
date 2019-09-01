import React from 'react';
import {SchedulerStoreProvider, OuterPropsProvider} from './state';
import Scheduler from './components/Scheduler';

export default (props) => {
    return (
        <SchedulerStoreProvider>
            <OuterPropsProvider value={props}>
                <Scheduler {...props} />
            </OuterPropsProvider>
        </SchedulerStoreProvider>
    );
};
