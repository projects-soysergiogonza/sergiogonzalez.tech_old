'use client';
import { useLogin } from '@services/auth/login';
import { type ChangeEvent, useState } from 'react';

const Authentication = () => {
  const [credentials, setCredentials] = useState({
    email: 'sergio@sergio.com',
    password: '123456',
  });

  const { data, isLoading, error } = useLogin(credentials);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>Authentication</h1>
      <form>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            value={credentials.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            value={credentials.password}
            onChange={handleInputChange}
          />
        </div>
      </form>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <p>Login successful</p>}
    </div>
  );
};

export default Authentication;
