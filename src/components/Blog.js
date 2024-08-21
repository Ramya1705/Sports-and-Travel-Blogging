import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  { id: 1, title: 'First Blog Post', excerpt: 'This is a brief overview of the first post.' },
  { id: 2, title: 'Second Blog Post', excerpt: 'Here is a summary of the second post.' },
  // Add more blog posts as needed
];

const BlogList = () => {
  return (
    <div className="blog-list">
      <h1>Blog Posts</h1>
      {blogPosts.map(post => (
        <div key={post.id} className="blog-item">
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
          <Link to={`/post/${ post.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;