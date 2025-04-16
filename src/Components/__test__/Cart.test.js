import { BrowserRouter } from 'react-router-dom';
import { act, fireEvent, render, screen } from '@testing-library/react';
import MainHeader from '../Header/MainHeader';
import { Provider } from 'react-redux';
import { appStore } from '../../utils/appStore';
import ProductDetailMainContainer from '../MainContent/ProductDetailPage/ProductDetailMainContainer';
import MOCK_DATA from '../__mock__/productDetailMock.json';
import CartMainContainer from '../MainContent/Cart/CartMainContainer';

global.fetch = jest.fn(
  async () =>
    await Promise.resolve({
      json: async () => await Promise.resolve(MOCK_DATA),
    }),
);

describe('Check cart add, remove', () => {
  it('check no of items in cart - header', () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <MainHeader />
        </Provider>
      </BrowserRouter>,
    );
    const cart_items_number = screen.queryByTestId('cart_items');
    expect(cart_items_number).not.toBeInTheDocument();
    expect(cart_items_number).toBeNull();
  });

  it('Check item added in cart', async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <MainHeader />
            <ProductDetailMainContainer />
            <CartMainContainer />
          </Provider>
        </BrowserRouter>,
      ),
    );
    const addToCartButton = screen.getByRole('button', { name: '+ Add to Cart' });
    fireEvent.click(addToCartButton);
    const cart_items_number = screen.getByTestId('cart_items');
    expect(cart_items_number).toHaveTextContent(1);
    const no_of_similar_item = screen.getByTestId('cart_item_quantity');
    expect(no_of_similar_item).toHaveTextContent(1);
    const cart_item_add = screen.getByRole('button', { name: '+' });
    fireEvent.click(cart_item_add);
    expect(no_of_similar_item).toHaveTextContent(2);
  });

  it('Check item removed cart', async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <MainHeader />
            <ProductDetailMainContainer />
            <CartMainContainer />
          </Provider>
        </BrowserRouter>,
      ),
    );
    const cart_item_remove = screen.getByRole('button', { name: '-' });
    fireEvent.click(cart_item_remove);
    const no_of_similar_item = screen.getByTestId('cart_item_quantity');
    expect(no_of_similar_item).toHaveTextContent(1);
    fireEvent.click(cart_item_remove);
    const no_item_cart = screen.getByText('No items in the cart');
    expect(no_item_cart).toBeInTheDocument();
    const cart_items_number = screen.queryByTestId('cart_items');
    expect(cart_items_number).not.toBeInTheDocument();
    expect(cart_items_number).toBeNull();
  });
});
