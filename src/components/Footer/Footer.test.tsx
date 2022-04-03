import { render, screen, RenderResult, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { MemoryRouter } from "react-router-dom";
import Footer from './Footer';
import Header from '../Header/Header';

const renderFooter = () : RenderResult =>  
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[{ pathname: '/dashboard' }]}>
        <Footer />
      </MemoryRouter>
    </Provider>
  );

  const renderFooterHeader = () : RenderResult =>  
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[{ pathname: '/dashboard' }]}>
        <Header/>
        <Footer/>
      </MemoryRouter>
    </Provider>
  );



test('App load components', () => {
    renderFooter()
    screen.getByTestId('Footer') 
});

test('should have four correct buttons', () => {
  renderFooter()
    expect(screen.getByTestId('dashboard'));
    expect(screen.getByTestId('wallet'));
    expect(screen.getByTestId('refresh'));
    expect(screen.getByTestId('settings'));
});

test('should refresh balance', () => {
  renderFooterHeader()
  expect(screen.getByTestId('balance')).toHaveTextContent('$ 0');
  let refresh_button = screen.getByTestId('refresh');
  fireEvent.click(
    refresh_button,
    new MouseEvent('click')
  );
  expect(screen.getByTestId('balance')).toHaveTextContent('$ 92,315.6');
});