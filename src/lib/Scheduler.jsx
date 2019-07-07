import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import {diff} from './utils/timeUtils';
import {isEmptyObject} from './utils/generalUtils';
import styles from './Scheduler.scss';

class Scheduler extends React.Component {
    static propTypes = {
        visibleStartDate: PropTypes.instanceOf(moment).isRequired,
        visibleEndDate: PropTypes.instanceOf(moment).isRequired,
        items: PropTypes.arrayOf(PropTypes.exact({
            id: PropTypes.string.isRequired,
            row: PropTypes.string.isRequired,
            startTime: PropTypes.instanceOf(moment).isRequired,
            endTime: PropTypes.instanceOf(moment).isRequired
        })).isRequired,
        rows: PropTypes.arrayOf(PropTypes.exact({
            id: PropTypes.string
        })).isRequired,
        ItemFunctionComponent: PropTypes.func.isRequired
    };

    cachedItemsByRows = {};

    constructor(props) {
        super(props);
        this.schedulerElement = React.createRef();
    }

    state = {
        schedulerWidth: 0,
        daysShown: 0
    };

    componentDidMount() {
        const {visibleStartDate, visibleEndDate} = this.props;

        this.setState({
            schedulerWidth: this.schedulerElement.current.getBoundingClientRect().width,
            daysShown: diff(visibleStartDate, visibleEndDate)
        });

        // scroll to middle horizontally
        setTimeout(() => {
            const {schedulerWidth} = this.state;
            this.schedulerElement.current.scrollLeft = schedulerWidth;
        }, 0);
    }

    get columns() {
        const {daysShown} = this.state;
        const {visibleStartDate, visibleEndDate} = this.props;

        const cols = [];
        const start = visibleStartDate.clone().add(-daysShown, 'days');
        const end = visibleEndDate.clone().add(daysShown, 'days');

        // visible dates are the diff between visibleStartDate and visibleEndDate
        // which are the visible window, but actually rendered one more window to
        // the left, and one more window to the right.
        for (let i = start; i < end; i = i.clone().add(1, 'days')) {
            cols.push({
                id: i.format('DD/MM'),
                startDate: i.clone(),
                endDate: i.clone().add(1, 'days')
            });
        }
        return cols;
    }

    get columnWidth() {
        const {daysShown, schedulerWidth} = this.state;
        return schedulerWidth / daysShown;
    }

    get itemsByRows() {
        const {items} = this.props;
        if (!isEmptyObject(this.cachedItemsByRows)) return this.cachedItemsByRows;
        this.cachedItemsByRows = items.reduce((previous, current) => {
            const previousCopy = Object.assign(previous, {});
            if (current.row in previous) {
                previousCopy[current.row].push(current);
            } else {
                previousCopy[current.row] = [current];
            }
            return previousCopy;
        }, {});
        return this.cachedItemsByRows;
    }


    handleClick = () => {
    };

    render() {
        const {items, rows, ItemFunctionComponent} = this.props;

        return (
            <div className={styles.wrapper}>
                <div className={styles.scheduler} ref={this.schedulerElement}>
                    <div className={styles.rows}>
                        {rows.map(r => (
                            <div key={r.id} className={styles.row}>
                                {
                                    this.columns.map(column => (
                                        <div style={{width: `${this.columnWidth}px`}} className={styles.dayColumn} key={column.id}>
                                            {
                                                items
                                                    .filter(item => item.row === r.id)
                                                    .filter(item => item.startTime.isBetween(column.startDate, column.endDate))
                                                    .map((item) => {
                                                        const lengthInDays = item.endTime.diff(item.startTime, 'days', true);
                                                        const width = (lengthInDays * this.columnWidth).toFixed(3);
                                                        return (
                                                            <div key={item.id} className={styles.itemWrapper} style={{width}}>
                                                                <ItemFunctionComponent width={width} />
                                                            </div>
                                                        );
                                                    })
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Scheduler;
