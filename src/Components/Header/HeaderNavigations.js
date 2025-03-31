import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function HeaderNavigations() {
  const [loginState, setLoginState] = useState('Log In');
  return (
    <div className="headNavigations">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>Cart</li>
        <li>
          <button onClick={() => (loginState === 'Log In' ? setLoginState('Log Out') : setLoginState('Log In'))}>
            {loginState}
          </button>
        </li>
      </ul>
    </div>
  );
}
