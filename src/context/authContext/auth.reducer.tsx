import { ReducerActionI } from './auth.interface';
import { authContextT } from './auth.types'

const handlers = {
    LOGIN: (state: authContextT, action: ReducerActionI) => {
        const { user, access } = action.payload;
        return {
            ...state,
            isAuthenticated: true,
            user,
            access
          };
    }
}

const authReducer = (state: authContextT, action: ReducerActionI) => {
    //@ts-ignore
    return handlers[action.type] ? handlers[`${action.type}`](state, action) : state;
}

export { authReducer };