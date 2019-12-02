import React, {useLayoutEffect, useRef, useEffect, useCallback, useContext} from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styles from './Scheduler.scss';
import {getGridBackgroundURL} from '../../canvas';
import {OuterPropsContext} from '../../state/OuterPropsContext';
import Row from '../Row';

import globalCss from '../../css/globals.scss';

export default function Scheduler({ scrollerRef, numberOfDays, normalizedItems, hoveredRow, setHoveredRow }) {
    const { columnWidth, rows, sidebarWidth, rowHeight: height } = useContext(OuterPropsContext);
    const width = numberOfDays * columnWidth;
    const backgroundImage = `url(${getGridBackgroundURL(width, numberOfDays, globalCss.lineColor)}`;

    return (
        <div className={styles.schedulerWrapper}>
            <div className={styles.schedulerSidebar} style={{ width: sidebarWidth, minWidth: sidebarWidth, flexBasis: sidebarWidth }}>
                {
                    rows.map(r => <div key={`${r.id}-sidebar`} onMouseEnter={() => { setHoveredRow(r.id); }} onMouseLeave={() => { setHoveredRow(null); }} className={cx(styles.sidebarRow, { [styles.hovered]: r.id === hoveredRow })} style={{ height }}>{r.id}</div>)
                }
            </div>
            <div className={styles.schedulerContent} ref={scrollerRef}>
                <div className={styles.schedulerBackground} style={{ width, backgroundImage }}>
                    {
                        rows.map(r => <Row key={`${r.id}-scheduler`} id={r.id} items={normalizedItems[r.id]} />)
                    }
                </div>
            </div>
        </div>
    );
}

Scheduler.propTypes = {
    hoveredRow: PropTypes.any,
    scrollerRef: PropTypes.any,
    numberOfDays: PropTypes.number,
    normalizedItems: PropTypes.object,
    setHoveredRow: PropTypes.func
};
