import React, {useContext, useState} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {OuterPropsContext} from '../../state/OuterPropsContext';
import styles from './Debug.scss';

export default function Debug({computed, state}) {
    const outerProps = useContext(OuterPropsContext);
    const [stateExpanded, setStateExpanded] = useState(false);
    const [propsExpanded, setPropsExpanded] = useState(false);
    const [computedExpanded, setComputedExpanded] = useState(false);

    return (
        <div className={styles.debug}>
            <div className={cx(stateExpanded ? styles.expanded : styles.collapsed)}>
                <button className={cx(styles.button)} type="button" onClick={() => { setStateExpanded(!stateExpanded); }}>State:</button>
                <pre>{JSON.stringify(state, null, 2)}</pre>
            </div>
            <div className={cx(propsExpanded ? styles.expanded : styles.collapsed)}>
                <button className={cx(styles.button)} type="button" onClick={() => { setPropsExpanded(!propsExpanded); }}>Props:</button>
                <pre>{JSON.stringify(outerProps, null, 2)}</pre>
            </div>
            <div className={cx(computedExpanded ? styles.expanded : styles.collapsed)}>
                <button className={cx(styles.button)} type="button" onClick={() => { setComputedExpanded(!computedExpanded); }}>Computed:</button>
                <pre>{JSON.stringify(computed, null, 2)}</pre>
            </div>
        </div>
    );
}

Debug.propTypes = {
    computed: PropTypes.object.isRequired,
    state: PropTypes.object.isRequired
};
