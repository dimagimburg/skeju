import React from 'react';
import { render } from 'react-dom';
import { Scheduler } from '../../src';
import moment from 'moment';
import Item from './Item';

const App = () => {
    const items = [
        {
            id: '111',
            row: 'shmulik',
            startTime: moment().add(2, 'seconds'),
            endTime: moment().add(2, 'seconds').add(2, 'days').add(2, 'hours')
        },
        {
            id: '222',
            row: 'eliko',
            startTime: moment().add(2, 'seconds').subtract(1, 'days'),
            endTime: moment().add(2, 'seconds').add(1, 'days')
        },
        {
            id: '333',
            row: 'eliko',
            startTime: moment().add(2, 'seconds').add(3, 'days'),
            endTime: moment().add(2, 'seconds').add(8, 'days')
        }
    ];

    const rows = [
        {
            id: 'shmulik'
        },
        {
            id: 'eliko'
        }
    ];

    return (
        <div style={{'width': '1000px'}}>
            <Scheduler
                visibleStartDate={moment()}
                visibleEndDate={moment().add(22, 'days')}
                items={items}
                rows={rows}
                renderItem={(props) => <Item {...props} />}
            />
        </div>
    );
};

render(<App />, document.getElementById("root"));