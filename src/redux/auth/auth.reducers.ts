import { AuthKeys } from './auth.keys';
import { IAuthAction, IAuthState, ISignInSuccess } from './auth.interfaces';
import { CURRENT_USER } from '../../constants';

const INITIAL_STATE: IAuthState = {
  currentUser: null,
  isAuth: false,
  isLoading: false,
  error: null,
};

const mappedActions = {
  [AuthKeys.FETCH_SIGNIN]: (state: IAuthState) => {
    return { ...state, isLoading: true };
  },
  [AuthKeys.FETCH_SIGNIN_SUCCESS]: (state: IAuthState, action: IAuthAction<ISignInSuccess>) => {
    localStorage.setItem(CURRENT_USER, JSON.stringify(action.payload.currentUser));

    return {
      ...state,
      isAuth: action.payload.isAuth,
      currentUser: action.payload.currentUser,
      isLoading: false,
      error: null,
    };
  },
  [AuthKeys.FETCH_SIGNIN_ERROR]: (state: IAuthState, action: IAuthAction<Error>) => {
    return { ...state, error: action.payload, isLoading: false };
  },
  [AuthKeys.POST_SIGNUP]: (state: IAuthState) => {
    return { ...state, isLoading: true };
  },
  [AuthKeys.POST_SIGNUP_SUCCESS]: (state: IAuthState) => {
    return { ...state, isLoading: false };
  },
  [AuthKeys.SIGNOUT]: (state: IAuthState) => {
    localStorage.removeItem(CURRENT_USER);
    return { ...state, isLoading: false, isAuth: false, error: null, currentUser: null };
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default (state = INITIAL_STATE, action: IAuthAction<any>) => {
  const fn = mappedActions[action.type];
  return { ...(fn ? fn(state, action) : state) };
};
