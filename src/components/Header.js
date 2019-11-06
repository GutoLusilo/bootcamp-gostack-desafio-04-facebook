import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import '../styles/Header.css';

import nameLogo from '../assets/facebook-name-logo.png';

function Header() {
  return (
    <div class="header">
      <div class="header-content">
        <img id="name-logo" src={nameLogo} />
        <div class="profile-link-icon">
          <a id="profile-link" href="#">
            Meu perfil
          </a>
          <AccountCircleIcon />
        </div>
      </div>
    </div>
  );
}

export default Header;