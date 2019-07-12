import uiReducer from './ui/reducer';

export default ({ui}, action) => ({
    ui: uiReducer(ui, action)
});
