import { render, screen } from '@testing-library/react';
import ProductCard, { withFastSellingLabel } from '../MainContent/HomePage/ProductCard/ProductCard';
import PRODUCT_MOCK_DATA from '../__mock__/productMock.json';

it('Product Card is rendered', () => {
  render(<ProductCard product={PRODUCT_MOCK_DATA} />);
  const name = screen.getByText('Essence Mascara Lash Princess');
  expect(name).toBeInTheDocument();
});

it('Should render Product card with Selling Fast label', () => {
  render(withFastSellingLabel(ProductCard)({ product: PRODUCT_MOCK_DATA }));
  const sellingFastLabel = screen.queryAllByText('Selling Fast');
  expect(sellingFastLabel[0]).toBeInTheDocument();
});
