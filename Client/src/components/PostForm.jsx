import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchPost, savePost } from '../redux/actions/postsActions';

function PostForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentPost = useSelector(state => state.currentPost);
  const error = useSelector(state => state.error);
  const [formData, setFormData] = useState({ title: '', content: '', author: '' });

  useEffect(() => {
    if (id) {
      dispatch(fetchPost(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (id && currentPost) {
      setFormData({
        title: currentPost.title,
        content: currentPost.content,
        author: currentPost.author,
      });
    }
  }, [id, currentPost]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(savePost(formData, id));
    if (!error) {
      navigate('/');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
      {error && <p className="text-red-400">{error}</p>}
      <div>
        <label className="block text-gray-300 mb-2">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border border-gray-600 rounded p-3 bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-gray-300 mb-2">Content</label>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          className="w-full border border-gray-600 rounded p-3 bg-gray-700 text-gray-100 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>
      </div>
      <div>
        <label className="block text-gray-300 mb-2">Author</label>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          className="w-full border border-gray-600 rounded p-3 bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
      >
        {id ? 'Update Post' : 'Create Post'}
      </button>
    </form>
  );
}

export default PostForm;