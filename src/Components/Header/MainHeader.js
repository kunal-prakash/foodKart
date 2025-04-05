import HeaderNavigations from './HeaderNavigations';
import Logo from './Logo';

export default function MainHeader() {
  return (
    <header className="flex justify-between h-30  bg-cyan-600 shadow-lg">
      <Logo />
      <HeaderNavigations />
    </header>
  );
}
