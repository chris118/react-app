import React from 'react';


function Blogs(props) {
  const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];

  const sidebar = (
    <ul>
      {posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div class='group-div'>
      <p>Blogs: 列表 & Keys</p>
      {sidebar}
      {content}
    </div>
  );
}

export default Blogs;