import React from 'react';

import { baseUrl } from '../baseUrl';

import GoogleLoginButton from '../components/GoogleLoginButton';

const Home = () => {
  return (
    <div>
      <h1>Hello</h1>
      <GoogleLoginButton baseUrl={baseUrl} />
    </div>
  );
};

export default Home;
