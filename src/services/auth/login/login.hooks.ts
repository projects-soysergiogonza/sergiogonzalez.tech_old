import { loginApiService } from '@services/auth/login/login.service';
import { useQuery } from '@tanstack/react-query';

export interface LoginInput {
  email: string;
  password: string;
}

export const useLogin = (input: LoginInput) =>
  useQuery({
    queryKey: loginApiService().queryKey,
    queryFn: () => loginApiService().queryFn(input),
  });
