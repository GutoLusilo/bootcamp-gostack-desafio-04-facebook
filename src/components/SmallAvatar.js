import React from 'react';
import PropTypes from 'prop-types';
import '../styles/SmallAvatar.css';

import defaultProfilePicture from '../assets/default_profile_picture.png';

function SmallAvatar({ user_picture_url, userRoute }) {
  return (
    <a href={userRoute}>
      <img id="avatar_img" src={user_picture_url} />
    </a> // Link to user's profile page
  );
}

SmallAvatar.propTypes = {
  user_picture_url: PropTypes.string,
  userRoute: PropTypes.string,
}

SmallAvatar.defaultProps = {
  user_picture_url: defaultProfilePicture,
  userRoute: '#',
}

export default SmallAvatar;