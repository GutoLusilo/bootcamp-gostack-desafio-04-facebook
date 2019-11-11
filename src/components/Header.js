import React from 'react';
import '../styles/Header.css';

import nameLogo from '../assets/facebook-name-logo.png';
import SmallAvatar from './SmallAvatar';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <img id="name-logo" src={nameLogo} />
        <nav className="profile-link-icon">
          <a id="profile-link" href="#">
            Meu perfil
          </a>
          <SmallAvatar />
        </nav>
      </div>
    </header>
  );
}

export default Header;