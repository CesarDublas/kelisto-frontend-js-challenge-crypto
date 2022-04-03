import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

test('App load components', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  screen.getByTestId('Header');
  screen.getByTestId('PageContent');
  screen.getByTestId('Footer');
});
