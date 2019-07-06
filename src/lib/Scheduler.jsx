import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import {diff} from './utils/timeUtils';
import {isEmptyObject} from './utils/generalUtils';
import styles from './Scheduler.scss';

class Scheduler extends React.Component {
    static propTypes = {
        visibleStartDate: PropTypes.instanceOf(moment).isRequired,
        visibleEndDate: PropTypes.instanceOf(moment).isRequired
    };

    items = [
        {
            row: 'shmulik',
            startTime: moment(),
            endTime: moment().add(2, 'days')
        },
        {
            row: 'eliko',
            startTime: moment().subtract(1, 'days'),
            endTime: moment().add(1, 'days')
        }
    ];

    rows = [
        {
            id: 'shmulik'
        },
        {
            id: 'eliko'
        }
    ];

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

        const cols = [];
        // visible dates are the diff between visibleStartDate and visibleEndDate
        // which are the visible window, but actually rendered one more window to
        // the left, and one more window to the right.
        for (let i = 0; i < daysShown * 3; i += 1) {
            cols.push(i);
        }
        return cols;
    }

    get columnWidth() {
        const {daysShown, schedulerWidth} = this.state;
        return schedulerWidth / daysShown;
    }

    get itemsByRows() {
        if (!isEmptyObject(this.cachedItemsByRows)) return this.cachedItemsByRows;
        this.cachedItemsByRows = this.items.reduce((previous, current) => {
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
        const {
            schedulerWidth
        } = this.state;

        return (
            <div className={styles.wrapper}>
                <div>
                    schedulerWidth: {schedulerWidth},
                    itemsByRows: {this.itemsByRows.eliko[0].row}
                </div>
                <div className={styles.scheduler} ref={this.schedulerElement}>
                    <div className={styles.rows}>
                        {this.rows.map(r => (
                            <div key={r.id} className={styles.row}>
                                {this.columns.map(i => <div style={{width: `${this.columnWidth}px`}} className={styles.dayColumn} key={i}>{i}</div>)}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Scheduler;
