/* eslint-disable @typescript-eslint/no-explicit-any */
import { all } from 'redux-saga/effects';
import authSagas from './auth/auth.saga';

export default function* rootSagas(): any {
  return yield all([authSagas]);
}
