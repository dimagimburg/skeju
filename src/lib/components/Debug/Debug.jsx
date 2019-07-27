import React from 'react';
import PropTypes from 'prop-types';
import styles from './Debug.scss';

export default function Debug({computed, state}) {
    return (
        <div className={styles.debug}>
            <div>
                State:
                <pre>{JSON.stringify(state, null, 2)}</pre>
            </div>
            <div>
                Computed:
                <pre>{JSON.stringify(computed, null, 2)}</pre>
            </div>
        </div>
    );
}

Debug.propTypes = {
    computed: PropTypes.object.isRequired,
    state: PropTypes.object.isRequired
};
