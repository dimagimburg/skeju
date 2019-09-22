import React, {
    useState, useMemo, useContext, createContext
} from 'react';

export let computed;
export let setState;

const useStoreParts = (initialState, actions, _computed) => {
    const [state, _setState] = useState(initialState);
    return useMemo(() => {
        const computedEvaluated = Object.entries(_computed).reduce((prev, [name, func]) => {
            Object.defineProperty(prev, name, { get: () => func(state), enumerable: true });
            return prev;
        }, {});

        setState = _setState;
        computed = computedEvaluated;

        return {
            actions,
            computed: computedEvaluated,
            state
        };
    }, [state]);
};

export const Store = (storeProps) => {
    const StoreContext = createContext();

    const StoreProvider = (prps) => {
        const {children} = prps;
        const store = useStoreParts(storeProps.initialState, storeProps.actions, storeProps.computed);

        return (
            <StoreContext.Provider value={store}>
                {children}
            </StoreContext.Provider>
        );
    };

    const useStore = () => useContext(StoreContext);

    return [StoreProvider, useStore];
};
