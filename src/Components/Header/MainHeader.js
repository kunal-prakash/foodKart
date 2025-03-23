import './style/MainHeader.scss';
import HeaderNavigations from './HeaderNavigations';
import Logo from './Logo';
import Search from './Search';

export default function MainHeader() {
  return (
    <header>
      <Logo />
      <Search />
      <HeaderNavigations />
    </header>
  );
}
