import React from 'react';
import styles from './Item.scss';

export default function Item(props){
    const {width, id} = props;
    return <div className={styles.item}>{width} - {id}</div>;
}