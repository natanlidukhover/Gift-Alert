import React from 'react';
import { Amplify } from 'aws-amplify';
import config from "./src/aws-exports";
import { withAuthenticator } from 'aws-amplify-react-native';
import Home from './src/Home';

Amplify.configure(config);

const App = () => {
  return (
    <Home />
  );
}

export default withAuthenticator(App);