import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducers from './root-reducer';
import rootSagas from './root-sagas';

const reduxSagaMiddleware = createSagaMiddleware();

const middlewares = [reduxSagaMiddleware];

export const store = applyMiddleware(...middlewares)(createStore)(rootReducers);

reduxSagaMiddleware.run(rootSagas);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
