import React from 'react';
import { render } from 'react-dom';
import { Scheduler } from '../../src';
import moment from 'moment';
import Item from './Item';

const App = () => {
    const items = [
        // {
        //     id: '111',
        //     row: 'shmulik',
        //     startTime: moment().add(12, 'hours'),
        //     endTime: moment().add(2, 'seconds').add(2, 'days').add(24, 'hours')
        // },
        // {
        //     id: '222',
        //     row: 'eliko',
        //     startTime: moment().add(2, 'hours').subtract(1, 'days'),
        //     endTime: moment().add(2, 'seconds').add(1, 'days')
        // },
        // {
        //     id: '333',
        //     row: 'eliko',
        //     startTime: moment().add(1, 'hours').add(3, 'days'),
        //     endTime: moment().add(2, 'seconds').add(8, 'days')
        // },
        {
            id: '444',
            row: 'eliko',
            startTime: moment().add(-100, 'days').add(3, 'hours'),
            endTime: moment().add(1, 'days').startOf('day').add(20, 'hours')
        },
        // {
        //     id: '444',
        //     row: 'shmulik',
        //     startTime: moment().add(2, 'seconds').add(-200, 'days'),
        //     endTime: moment().add(2, 'seconds').add(-1, 'days')
        // }
    ];

    console.log(items);

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