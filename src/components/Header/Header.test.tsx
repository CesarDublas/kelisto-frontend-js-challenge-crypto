import { render, screen, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { MemoryRouter } from "react-router-dom";
import { getList, calculateTotals, refreshList, changeName } from "../PageContent/components/CryptoList/cryptoSlice";
import Header from './Header';

const renderHeader = () : RenderResult =>  
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[{ pathname: '/dashboard' }]}>
        <Header />
      </MemoryRouter>
    </Provider>
  );

test('App load components', () => {
    renderHeader()
    screen.getByTestId('Header') 
});

test('should get correct totals', () => {
  store.dispatch(getList());
  store.dispatch(calculateTotals());
  renderHeader()
    expect(screen.getByTestId('balance')).toHaveTextContent('$ 83,415.6');
});

test('should refresh totals', () => {
  store.dispatch(getList());
  store.dispatch(calculateTotals());
  store.dispatch(refreshList());
  store.dispatch(calculateTotals());
  renderHeader()
    expect(screen.getByTestId('balance')).toHaveTextContent('$ 92,315.6');
});

test('should refresh name', () => {
  store.dispatch(changeName('Cesar'));
  renderHeader();
  expect(screen.getByTestId('name')).toHaveTextContent('Hi, Cesar');
});

test('should link to notifications', () => {
  renderHeader()
  let notifications_bell = screen.getByTestId('notifications');
  expect(notifications_bell).toHaveAttribute('href', '/notifications');
});
