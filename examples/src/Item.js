import React from 'react';
import cx from 'classnames';
import './Item.css';

// you can either do it with regular css and get the parent .selected selector
// or you can implement your own logic via props

export default function Item(props){
    const {width, id, allowSelect, selected} = props;
    return <div className={cx('item', {selectable: allowSelect})}>{`id: ${id}, width: ${width}`}{allowSelect ? ` selected: ${selected}` : ''}</div>;
}