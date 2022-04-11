import { ISignInData, IUser } from '../redux/auth/auth.interfaces';
import { USERS_KEY } from '../constants/index';

export function postSignInMock(data: ISignInData): Promise<IUser> {
  return new Promise<IUser>((resolve, reject) => {
    const users = localStorage.getItem(USERS_KEY);
    if (users) {
      const jsonUsers = JSON.parse(users);
      const user: Array<IUser> = jsonUsers.users.filter(
        (user: IUser) => data.cpf === user.cpf && data.password === user.password,
      );
      if (user.length) {
        resolve(user[0]);
      }
      reject(new Error('Login ou senha incorretos'));
    }
    reject(new Error('Ocorreu um erro inesperado'));
  });
}
