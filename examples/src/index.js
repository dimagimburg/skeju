import React from 'react';
import { render } from 'react-dom';
import { Scheduler } from '../../src';
import moment from 'moment';

const App = () => (
    <div style={{'width': '1000px'}}>
        <Scheduler visibleStartDate={moment()} visibleEndDate={moment().add(22, 'days')} />
    </div>
);

render(<App />, document.getElementById("root"));