import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
//  import './Homepage.css'

function BlogHome() {
  const [blogs, setBlogs] = useState([]);
  const { userId } = useParams();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`http://localhost:9000/api/blogs/${userId}`);
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };
    fetchBlogs();
  }, [userId]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Blog Posts</h1>
      <Link to={`/user/${userId}/new-blog`} className="bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block">
        Create New Blog
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog._id} className="bg-white shadow-md rounded-lg overflow-hidden">
            {blog.mediaUrl && (
              <img src={`http://localhost:5000${blog.mediaUrl}`} alt={blog.title} className="w-full h-48 object-cover" />
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-600 mb-2">{blog.place} - {new Date(blog.date).toLocaleDateString()}</p>
              <Link to={`/user/${userId}/blog/${blog._id}`} className="text-blue-500 hover:underline">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogHome;