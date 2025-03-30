import MainFooter from './Components/Footer/MainFooter';
import MainHeader from './components/Header/MainHeader';

export default function Layout({ children }) {
  return (
    <>
      <MainHeader />
      {children}
      <MainFooter />
    </>
  );
}
