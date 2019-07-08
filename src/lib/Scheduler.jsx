import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import {diff} from './utils/timeUtils';
import {isEmptyObject} from './utils/generalUtils';
import Items from './components/Items/Items';
import Column from './components/Column/Column';
import styles from './Scheduler.scss';

class Scheduler extends React.Component {
    static propTypes = {
        visibleStartDate: PropTypes.instanceOf(moment).isRequired,
        visibleEndDate: PropTypes.instanceOf(moment).isRequired,
        rows: PropTypes.arrayOf(PropTypes.exact({
            id: PropTypes.string
        })).isRequired,
        items: PropTypes.array.isRequired,
        renderItem: PropTypes.func.isRequired
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
        const {items, rows, renderItem} = this.props;

        return (
            <div className={styles.wrapper}>
                <div className={styles.scheduler} ref={this.schedulerElement}>
                    <div className={styles.rows}>
                        {rows.map(r => (
                            <div key={r.id} className={styles.row}>
                                {
                                    this.columns.map(column => (
                                        <Column key={column.id} width={this.columnWidth}>
                                            <Items
                                                row={r}
                                                items={items}
                                                renderItem={renderItem}
                                                column={column}
                                                columnWidth={this.columnWidth}
                                            />
                                        </Column>
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
