import React from 'react';
import { useLocation } from 'react-router-dom';
import { WelcomeContainer } from './styledWelcome';

const Welcome = () => {
  const location = useLocation();
  const { user } = location.state || {};

  return (
    <WelcomeContainer>
      <h2>Logado como: {user?.email}</h2>
    </WelcomeContainer>
  );
};

export default Welcome;
