import { AuthKeys } from './auth.keys';

export interface IUser {
  name: string;
  cpf: string;
  telephone: string;
  address: string;
  email: string;
  password: string;
}

export interface IAuthState {
  currentUser: IUser | null;
  isAuth: boolean;
  isLoading: boolean;
  error: Error | null;
}

export interface IAuthAction<T> {
  type: AuthKeys;
  payload: T;
}

export interface ISignInSuccess {
  currentUser: IUser;
  isAuth: boolean;
}

export interface ISignInData {
  cpf: string;
  password: string;
}
