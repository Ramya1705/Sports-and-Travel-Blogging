import React from "react";
import "./BlogPost.css";


const posts = [
  {
    title: "Discover the Alps",
    excerpt: "An unforgettable journey through the European mountains...",
    image: "https://images.pexels.com/photos/552785/pexels-photo-552785.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Beaches of Bali",
    excerpt: "Experience the serene beauty of Bali's beaches...",
    image: "https://images.pexels.com/photos/1646870/pexels-photo-1646870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Adventure in the Amazon",
    excerpt: "Get lost in the vast and wild Amazon rainforest...",
    image: "https://images.pexels.com/photos/931007/pexels-photo-931007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

function BlogPosts() {
  return (
    <section className="blog-posts">
      {posts.map((post, index) => (
        <div className="post" key={index}>
          <img src={post.image} alt={post.title} />
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </section>
  );
}

export default BlogPosts;
