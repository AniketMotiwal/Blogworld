import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Importing edit and delete icons from Font Awesome

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [expandedPosts, setExpandedPosts] = useState([]);

  useEffect(() => {
    // Define an async function to fetch posts
    const fetchPosts = async () => {
      try {
        // Make a GET request to fetch posts from the server
        const response = await axios.get('http://localhost:80/posts');
        // Set the fetched posts to the state
        setPosts(response.data);
        // Initialize expanded state for each post to false
        setExpandedPosts(response.data.map(() => false));
      } catch (error) {
        console.error('Error fetching posts:', error.message);
      }
    };

    // Call the fetchPosts function when the component mounts
    fetchPosts();
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  const handleDelete = async (postId) => {
    try {
      // Make a DELETE request to delete the post
      await axios.delete(`http://localhost:80/posts/${postId}`);
      // Remove the deleted post from the state
      setPosts(posts.filter(post => post.id !== postId));
      // Remove the expanded state for the deleted post
      setExpandedPosts(expandedPosts.filter((_, index) => posts[index].id !== postId));
    } catch (error) {
      console.error('Error deleting post:', error.message);
    }
  };

  const toggleExpand = (index) => {
    setExpandedPosts(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className='home grid grid-cols-2 rounded p-10 space-y-4' style={{ gap: '20px' }}>
      {posts.map((post, index) => (
        <div className="post" key={post.id}>  
          <div className="img">
            <img className="object-cover w-full h-full hover:scale-105" src={post.img} alt=""/>
            {/* Add edit and delete icons */}
            <div className="mt-4 flex justify-center">
              <Link to={`/editpost/${post.id}`}>
                <span style={{ fontSize: '1.5rem', marginRight: '10px' }} className="text-blue-500 cursor-pointer">
                  <FaEdit />
                </span>
              </Link>
              <span style={{ fontSize: '1.5rem' }} className="text-red-500 cursor-pointer ml-1 mb-10" onClick={() => handleDelete(post.id)}>
                <FaTrash />
              </span>
            </div>
          </div>
          <div className="content">
            <h1 className="text-xl font-bold mb-2">{post.title}</h1>
            <p className={`text-gray-700 ${expandedPosts[index] ? '' : 'truncate'}`}>{post.titledescription}</p>
            <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => toggleExpand(index)}>
              {expandedPosts[index] ? 'Read Less' : 'Read More'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
