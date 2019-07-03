import moment from 'moment';

export function formattedDate(date) {
    return moment(date).format('YYYY MM DD');
}
