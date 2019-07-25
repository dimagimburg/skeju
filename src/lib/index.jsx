import React from 'react';
import {SchedulerStoreProvider} from './state';
import Scheduler from './components/Scheduler';

export default props => <SchedulerStoreProvider><Scheduler {...props} /></SchedulerStoreProvider>;
