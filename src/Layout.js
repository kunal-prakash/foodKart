import MainFooter from './Components/Footer/MainFooter';
import MainHeader from './Components/Header/MainHeader';

export default function Layout({ children }) {
  return (
    <>
      <MainHeader />
      {children}
      <MainFooter />
    </>
  );
}
