import MainFooter from './Footer/MainFooter';
import MainHeader from './Header/MainHeader';

export default function Layout({ children }) {
  return (
    <>
      <MainHeader />
      {children}
      <MainFooter />
    </>
  );
}
