import React from 'react';
import '../styles/Comment.css'

import SmallAvatar from './SmallAvatar';

function Comment({ data }) {
  const { author, content } = data;
  const { name, avatar } = author;

  return (
    <div className="comment">
      <SmallAvatar user_picture_url={avatar} />
      <div className="comment-content">
        <span className="bold" >{name}</span>
        <span className="marginLeft8">{content}</span>
      </div>
    </div> 
  );
}

export default Comment;
