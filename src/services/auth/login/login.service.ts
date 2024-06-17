import { LoginInput } from '@services/auth/login/login.hooks';
import { axiosInstance } from '@services/axiosInstance';
import { AxiosResponse } from 'axios';

export const loginApiService = () => {
  return {
    async queryFn(input: LoginInput): Promise<any> {
      const response: AxiosResponse = await axiosInstance.post(
        `/api/login`,
        input
      );
      return response.data;
    },
    queryKey: ['loginApiService'],
  };
};
