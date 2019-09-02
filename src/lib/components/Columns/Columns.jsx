import React from 'react';
import PropTypes from 'prop-types';
import Column from '../Column';
import Items from '../Items';

export default function Columns(props) {
    const { columns, row, normalizedItems } = props;
    return (
        <>
            {
                columns.map((column) => {
                    // either item's start time or end time included in this day
                    // note: not all item are being drawn, only the ones with sufficient
                    // (start or end time is between hidden start date and hidden end date,
                    // or if start time is before hiddenStartDate and end time is after hiddenEndDate)
                    const hasItemsToDraw = normalizedItems[row.id][column.id];
                    return (
                        <Column key={column.id}>
                            { hasItemsToDraw && <Items row={row} column={column} /> }
                        </Column>
                    );
                })
            }
        </>
    );
}

Columns.propTypes = {
    row: PropTypes.object.isRequired,
    columns: PropTypes.array.isRequired,
    normalizedItems: PropTypes.object.isRequired
};
