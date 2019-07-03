import React from 'react';
import moment from 'moment';
import {formattedDate} from './utils/timeUtils';
import styles from './Scheduler.scss';

class Scheduler extends React.Component {
    state = {
        leftDate: moment(),
        rightDate: moment(),
        currentDate: moment(),
    };

    handleClick = () => {
    };

    render() {
        const {leftDate, rightDate, currentDate} = this.state;
        return (
            <div>
                <div>
                    leftDate: {formattedDate(leftDate)},
                    rightDate: {formattedDate(rightDate)},
                    currentDate: {formattedDate(currentDate)}
                </div>
                <table className={styles.scheduler}>
                    <tbody>
                        <tr>
                            <td><button type="button" onClick={this.handleClick}>1123</button></td>
                            <td>moshiko</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Scheduler;
