import React, { Component } from 'react';
import '../styles/PostList.css';

import Post from './Post';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "https://oficinadainteligencia.com.br/wp-content/uploads/2019/07/opulent-profile-square-05.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://oficinadainteligencia.com.br/wp-content/uploads/2019/07/opulent-profile-square-05.jpg"
            },
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Julio Alcantara",
          avatar: "https://i0.wp.com/www.mobileworldlive.com/wp-content/uploads/2015/10/Dorsey-iamge.png?fit=550%2C532&ssl=1"
        },
        date: "04 Jun 2019",
        content: "Pessoal,\n\nAlguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://oficinadainteligencia.com.br/wp-content/uploads/2019/07/opulent-profile-square-05.jpg"
            },
            content: "Conteúdo do comentário"
          }
        ]
      }
    ]
  };

  render() {
    return (
      <div className="postlist" >
        {this.state.posts.map(post => <Post key={post.id} data={post} />)}
      </div>
    );
  }
}

export default PostList;
