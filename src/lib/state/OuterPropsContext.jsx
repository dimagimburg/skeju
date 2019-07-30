import React, {createContext} from 'react';
import PropTypes from 'prop-types';

export const OuterPropsContext = createContext({});

export const OuterPropsProvider = (props) => {
    const {value, children} = props;
    return (
        <OuterPropsContext.Provider value={value}>
            {children}
        </OuterPropsContext.Provider>
    );
};

OuterPropsProvider.propTypes = {
    value: PropTypes.object.isRequired,
    children: PropTypes.element.isRequired
};
