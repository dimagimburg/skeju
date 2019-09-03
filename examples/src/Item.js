import React from 'react';
import cx from 'classnames';
import './Item.css';

// you can either do it with regular css and get the parent .selected selector
// or you can implement your own logic via props

export default function Item(props){
    const {width, id} = props;
    return <div className={cx('item')}>{width} - {id}</div>;
}