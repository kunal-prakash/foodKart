import { act, fireEvent, render, screen } from '@testing-library/react';
import MainContainer from '../MainContent/HomePage/MainContainer';
import { BrowserRouter } from 'react-router-dom';
import MOCK_DATA from '../__mock__/productListMock.json';

global.fetch = jest.fn(
  async () =>
    await Promise.resolve({
      json: async () => await Promise.resolve(MOCK_DATA),
    }),
);

it('should render 2 cards for red text input', async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <MainContainer />
      </BrowserRouter>,
    ),
  );
  const InitialdisplayedCards = screen.getAllByTestId('product-card');
  expect(InitialdisplayedCards.length).toBe(30);
  const searchButton = screen.getByRole('button', { name: 'Search' });
  const searchInput = screen.getByTestId('search-input');
  fireEvent.change(searchInput, { target: { value: 'red' } });
  fireEvent.click(searchButton);
  const displayedCards = screen.getAllByTestId('product-card');
  expect(displayedCards.length).toBe(2);
});
