import React, {useContext} from 'react';
import {OuterPropsContext} from '../../state/OuterPropsContext';
import Columns from '../Columns';
import styles from './Rows.scss';

export default function Rows() {
    const {rows} = useContext(OuterPropsContext);
    return (
        <>
            {rows.map((row) => {
                return (
                    <div key={row.id} className={styles.row}>
                        <Columns row={row} />
                    </div>
                );
            })}
        </>
    );
}
