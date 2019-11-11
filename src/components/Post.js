import React from 'react';
import '../styles/Post.css';

import SmallAvatar from './SmallAvatar';
import Comment from './Comment';

function Post({ data }) {
  const { author, date, content } = data;
  const { name, avatar } = author;
  
  return (
    <div className="post">
      <div className="post-top">
        <SmallAvatar user_picture_url={avatar} />
        <div className="post-top-text">
          <span className="bold">{name}</span>
          <span className="smallGray">{date}</span>
        </div>
      </div>
      <p className="content">{content}</p>
      {data.comments.map(comment => 
        <Comment key={comment.id} data={comment} />
      )}
    </div>
  );
}

export default Post;
