import { createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContent/HomePage/MainContainer';
import About from './components/About';
import Contact from './components/Contact';
import { Error } from './components/Error';
import App from './App';
import ProductDetailMainContainer from './components/MainContent/ProductDetailPage/ProductDetailMainContainer';

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
    ],
    errorElement: <Error />,
  },
]);
