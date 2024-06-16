import { User } from '../entities/User';

export interface UserRepository {
  login(email: string, password: string): Promise<User>;
}
