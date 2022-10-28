import React from 'react'
import BackgroundLoginPage from '../components/LoginPage/Background'
import LoginForm from '../components/LoginPage/LoginForm';

function LoginPage() {
  return (
    <div>
      <LoginForm />
      <BackgroundLoginPage />
    </div>
  );
}

export default LoginPage