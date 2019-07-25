import React from 'react';

const withStore = mapHooksToProps => WrappedComponent => (props) => {
    const hookProps = mapHooksToProps(props);
    return <WrappedComponent {...hookProps} {...props} />;
};

export default withStore;
