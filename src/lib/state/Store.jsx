import React, {
    useState, useMemo, useContext, createContext
} from 'react';

const useStoreParts = (initialState, actions, computed) => {
    const [state, setState] = useState(initialState);
    return useMemo(() => {
        const computedEvaluated = Object.entries(computed).reduce((prev, [name, func]) => {
            Object.defineProperty(prev, name, { get: () => func(state), enumerable: true });
            return prev;
        }, {});

        return {
            actions: () => actions({state, computed: computedEvaluated, setState}),
            computed: computedEvaluated,
            state
        };
    }, [state]);
};

export const Store = ({ initialState, actions, computed }) => {
    const StoreContext = createContext();

    const StoreProvider = (prps) => {
        const {children} = prps;
        const store = useStoreParts(initialState, actions, computed);

        return (
            <StoreContext.Provider value={store}>
                {children}
            </StoreContext.Provider>
        );
    };

    const useStore = () => useContext(StoreContext);

    return [StoreProvider, useStore];
};
