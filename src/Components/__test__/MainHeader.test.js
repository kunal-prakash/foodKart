import { fireEvent, render, screen } from '@testing-library/react';
import MainHeader from '../Header/MainHeader';
import { Provider } from 'react-redux';
import { appStore } from '../../utils/appStore';
import { BrowserRouter } from 'react-router-dom';

describe('Header Cart Logo', () => {
  it('Header has cart icon present', () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <MainHeader />
        </Provider>
      </BrowserRouter>,
    );
    const cartLogo = screen.getByRole('link', { name: '🛒' });
    expect(cartLogo).toBeInTheDocument();
    expect(cartLogo).toHaveProperty('href', 'http://localhost/cart');
  });
  it('Header displays cart items count', () => {});
});

it('Login Button Functionality', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <MainHeader />
      </Provider>
    </BrowserRouter>,
  );
  const loginButton = screen.getByText('Log In');
  fireEvent.click(loginButton);
  expect(loginButton).toHaveTextContent('Log Out');
});
