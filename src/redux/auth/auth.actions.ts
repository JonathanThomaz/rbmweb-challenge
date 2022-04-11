import { ISignInData, ISignInSuccess, IUser } from './auth.interfaces';
import { AuthKeys } from './auth.keys';

export const fetchSignIn = (data: ISignInData) => ({
  type: AuthKeys.FETCH_SIGNIN,
  payload: data,
});
export const fetchSignInSuccess = (data: ISignInSuccess) => ({
  type: AuthKeys.FETCH_SIGNIN_SUCCESS,
  payload: data,
});
export const fetchSignInError = (err: Error) => ({
  type: AuthKeys.FETCH_SIGNIN_ERROR,
  payload: err,
});
export const postSignUp = (data: IUser) => ({
  type: AuthKeys.POST_SIGNUP,
  payload: data,
});
export const postSignUpSuccess = () => ({
  type: AuthKeys.POST_SIGNUP_SUCCESS,
  payload: {},
});
export const signOut = () => ({
  type: AuthKeys.SIGNOUT,
  payload: {},
});
