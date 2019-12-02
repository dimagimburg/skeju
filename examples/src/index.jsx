import React, {useState} from 'react';
import { render } from 'react-dom';
import { Scheduler } from '../../src';
import moment from 'moment';
import Item from './Item';

const App = () => {
    const [headerHeight, setHeaderHeight] = useState(50);

    const [items, setItems] = useState([
        // {
        //     id: '111',
        //     row: 'shmulik',
        //     startTime: moment().add(12, 'hours'),
        //     endTime: moment().add(2, 'seconds').add(2, 'days').add(24, 'hours'),
        //     allowSelect: true
        // },
        {
            id: '1111',
            row: 'shmulik',
            startTime: moment().add(1, 'day').startOf('day'),
            endTime: moment().add(1, 'days').endOf('day'),
            allowResize: true,
            allowSelect: true
        },
        {
            id: '1111',
            row: 'moshiko',
            startTime: moment().add(-2, 'day').startOf('day'),
            endTime: moment().add(1, 'days').endOf('day'),
            allowResize: true,
            allowSelect: true
        },
        {
            id: '3333',
            row: 'eliko',
            startTime: moment().add(3, 'hours'),
            endTime: moment().add(0.5, 'days'),
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
        },
        {
            id: 'moshiko'
        }
    ];

    return (
        <>
            <div>header height: <input type="range" min={10} max={100} value={headerHeight} onChange={(e) => {setHeaderHeight(e.target.value)}} /> {headerHeight}</div>
            <div style={{'width': '1000px', 'height': '500px'}}>
                <Scheduler
                    startDate={moment()}
                    endDate={moment().add(7, 'day')}
                    columnWidth={100}
                    sidebarWidth={150}
                    headerHeight={50}
                    rowHeight={40}
                    sidebarTitle={"Name"}
                    displayType="hourly"
                    rows={rows}
                    items={items}
                />
            </div>
        </>
    );
};

render(<App />, document.getElementById("root"));