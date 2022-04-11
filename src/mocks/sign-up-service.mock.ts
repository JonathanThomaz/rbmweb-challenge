import { IUser } from '../redux/auth/auth.interfaces';
import { USERS_KEY } from '../constants/index';

export function postSignUpMock(data: IUser) {
  return new Promise<void>((resolve, reject) => {
    const users = localStorage.getItem(USERS_KEY);
    if (users) {
      const jsonUsers = JSON.parse(users);
      jsonUsers.users.push(data);
      localStorage.setItem(USERS_KEY, JSON.stringify(jsonUsers));
      resolve();
    } else {
      localStorage.setItem(USERS_KEY, JSON.stringify({ users: [data] }));
      resolve();
    }
    reject(new Error('Ocorreu um erro inesperado'));
  });
}
