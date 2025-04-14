import { createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContent/HomePage/MainContainer';
import About from './components/About';
import Contact from './components/Contact';
import { Error } from './components/Error';
import App from './App';
import ProductDetailMainContainer from './components/MainContent/ProductDetailPage/ProductDetailMainContainer';
import CartMainContainer from './components/MainContent/Cart/CartMainContainer';

export const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <MainContainer />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/product/:productId',
        element: <ProductDetailMainContainer />,
      },
      {
        path: '/cart',
        element: <CartMainContainer />,
      },
    ],
    errorElement: <Error />,
  },
]);
