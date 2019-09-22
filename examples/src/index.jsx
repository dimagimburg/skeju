import React, {useState} from 'react';
import { render } from 'react-dom';
import { Scheduler } from '../../src';
import moment from 'moment';
import Item from './Item';

const App = () => {
    console.log('render');

    const [items, setItems] = useState([
        // {
        //     id: '111',
        //     row: 'shmulik',
        //     startTime: moment().add(12, 'hours'),
        //     endTime: moment().add(2, 'seconds').add(2, 'days').add(24, 'hours'),
        //     allowSelect: true
        // },
        {
            id: '123123',
            row: 'shmulik',
            startTime: moment().add(2, 'hours'),
            endTime: moment().add(2, 'days').add(24, 'hours'),
            allowResize: true,
            allowSelect: true
        },
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
        // {
        //     id: '444',
        //     row: 'eliko',
        //     startTime: moment().add(-100, 'days').startOf('day').add(12, 'hours'),
        //     endTime: moment().add(1, 'days').startOf('day').add(3, 'hours')
        // },
        // {
        //     id: '444',
        //     row: 'shmulik',
        //     startTime: moment().add(2, 'seconds').add(-200, 'days'),
        //     endTime: moment().add(2, 'seconds').add(-1, 'days')
        // }
    ]);

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
                visibleEndDate={moment().add(7, 'days')}
                items={items}
                rows={rows}
                renderItem={(props) => <Item {...props} />}
                onResizeFinished={(id, newStartTime) => {
                    const changedItemIndex = items.findIndex(i => i.id === id);
                    const newItems = [...items];
                    newItems[changedItemIndex].startTime = newStartTime;
                    setItems(newItems);
                }}
            />
        </div>
    );
};

render(<App />, document.getElementById("root"));