import createReducer from './createReducer.js'

export const CHANGE_PRIMARY = 'CHANGE_PRIMARY';

export const main = createReducer({primary: 'paperOrange'}, {
    [CHANGE_PRIMARY](state, action) {
        return Object.assign({}, {
            primary: action.primary
        });
    }
});

export function changePrimary(primary) {
    return {
        type: CHANGE_PRIMARY,
        primary
    }
}