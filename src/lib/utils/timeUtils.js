import moment from 'moment';

export function formatMoment(date) {
    return moment(date).format('YYYY-MM-DD');
}

export function diffInDays(date1, date2) {
    return Math.abs(date1.diff(date2, 'days'));
}
