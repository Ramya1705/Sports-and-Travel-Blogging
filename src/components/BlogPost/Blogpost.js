import React, { useState, useEffect } from 'react';
import { useParams, Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
 import './BlogPost.css';
 import { FaEye } from 'react-icons/fa';

function BlogPost() {
  const [blog, setBlog] = useState(null);
  const nav=useNavigate()
  const { userId, blogId } = useParams();
  const [blogid,setblogid]=useState();
  const handleDelete= async (id)=>{
  const response = await axios.delete(`http://localhost:9000/deleteblog/${id}`);
  if(response.data.message === "sucess"){
    nav(`/`);
  }
  console.log(response);
  }

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:9000/api/blogs/${userId}/${blogId}`);
        setBlog(response.data);
        console.log(response.data);
        
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };
    fetchBlog();
  }, [userId, blogId]);

  if (!blog) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to={`/`} className="text-blue-500 hover:underline mb-4 inline-block">
        &larr; Back to Home
      </Link>
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-600 mb-4">{blog.place} - {new Date(blog.date).toLocaleDateString()}</p>
      {blog.mediaUrl && (
        <img src={`http://localhost:9000${blog.mediaUrl}`} alt={blog.title} className="w-full max-w-2xl mb-6" />
      )}
      <p>
        <FaEye/>\
        {blog.count} </p>
      <div className="prose max-w-none">
         <p>{blog.content}</p> 
        <button onClick={()=>handleDelete(blog._id)}>Delete</button>
      </div>
    </div>
  );
}

export default BlogPost;