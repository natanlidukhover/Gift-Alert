import React from 'react';
import { Amplify } from 'aws-amplify';
import config from "./src/aws-exports";
import { withAuthenticator } from 'aws-amplify-react-native';
import Home from './src/Home';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

Amplify.configure(config);

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default withAuthenticator(App);