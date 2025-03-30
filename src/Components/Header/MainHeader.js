import './style/MainHeader.scss';
import HeaderNavigations from './HeaderNavigations';
import Logo from './Logo';

export default function MainHeader() {
  return (
    <header>
      <Logo />
      <HeaderNavigations />
    </header>
  );
}
