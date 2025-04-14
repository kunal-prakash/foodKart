import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../../utils/useOnlineStatus';
import CartLogo from './CartLogo';

export default function HeaderNavigations() {
  const [loginState, setLoginState] = useState('Log In');
  const isOnline = useOnlineStatus();

  return (
    <ul className="flex justify-around items-center m-5">
      <li className="px-2">Online Status: {isOnline ? '✅' : '🔴'}</li>
      <li className="px-2">
        <Link to="/">Home</Link>
      </li>
      <li className="px-2">
        <Link to="/about">About</Link>
      </li>
      <li className="px-2">
        <Link to="/contact">Contact</Link>
      </li>
      <li className="px-2 font-bold bg-green-50 rounded-[50%]">
        <Link to="/cart">
          <CartLogo />
        </Link>
      </li>
      <li className="px-2">
        <button
          className="cursor-pointer"
          onClick={() => (loginState === 'Log In' ? setLoginState('Log Out') : setLoginState('Log In'))}
        >
          {loginState}
        </button>
      </li>
    </ul>
  );
}
