import { all, call, put, takeLatest } from 'redux-saga/effects';
import { postSignUpSuccess, fetchSignInSuccess, fetchSignInError } from './auth.actions';
import { AuthKeys } from './auth.keys';
import { IAuthAction, ISignInData, IUser } from './auth.interfaces';
import { postSignUpMock } from '../../mocks/sign-up-service.mock';
import { postSignInMock } from 'mocks/sign-in-service.mock';

function* fetchSignInSaga(action: IAuthAction<ISignInData>) {
  try {
    const user: IUser = yield call(postSignInMock, action.payload);
    yield put(fetchSignInSuccess({ currentUser: user, isAuth: true }));
  } catch (error) {
    if (error instanceof Error) {
      yield put(fetchSignInError(error));
    }
  }
}
function* postSignUpDataSaga(action: IAuthAction<IUser>) {
  yield call(postSignUpMock, action.payload);
  yield put(postSignUpSuccess());
}

export default all([
  takeLatest(AuthKeys.POST_SIGNUP, postSignUpDataSaga),
  takeLatest(AuthKeys.FETCH_SIGNIN, fetchSignInSaga),
]);
