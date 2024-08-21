import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
//  import './NewBlogForm.css';

function NewBlogForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [place, setPlace] = useState('');
  const [date, setDate] = useState('');
  const [media, setMedia] = useState(null);
  const { userId } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('title', title);
    formData.append('content', content);
    formData.append('place', place);
    formData.append('date', date);
    if (media) {
      formData.append('media', media);
    }

    try {
      await axios.post('http://localhost:9000/api/blogs', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      navigate(`/user/${userId}`);
    } catch (error) {
      console.error('Error creating blog:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Create New Blog Post</h1>
      <form onSubmit={handleSubmit} className="max-w-lg">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-gray-700 font-bold mb-2">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-lg"
            rows="6"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="place" className="block text-gray-700 font-bold mb-2">Place</label>
          <input
            type="text"
            id="place"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 font-bold mb-2">Date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="media" className="block text-gray-700 font-bold mb-2">Media (Image/Video)</label>
          <input
            type="file"
            id="media"
            onChange={(e) => setMedia(e.target.files[0])}
            accept="image/*,video/*"
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Create Blog
        </button>
      </form>
    </div>
  );
}

export default NewBlogForm;