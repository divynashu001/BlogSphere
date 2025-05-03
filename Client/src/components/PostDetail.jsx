import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { fetchPost, deletePost } from '../redux/actions/postsActions';

function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentPost = useSelector(state => state.currentPost);
  const error = useSelector(state => state.error);

  useEffect(() => {
    dispatch(fetchPost(id));
  }, [id, dispatch]);

  const handleDelete = async () => {
    await dispatch(deletePost(id));
    if (!error) {
      navigate('/');
    }
  };

  if (!currentPost) return <p className="text-gray-400">Loading...</p>;
  if (error) return <p className="text-red-400">{error}</p>;

  return (
    <div className="max-w-2xl mx-auto bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-700">
      <h1 className="text-3xl font-bold mb-4 text-gray-100">{currentPost.title}</h1>
      <p className="text-sm text-gray-400 mb-4">
        By {currentPost.author} on {new Date(currentPost.timestamp).toLocaleDateString()}
      </p>
      <p className="mb-4 text-gray-300">{currentPost.content}</p>
      <div className="flex space-x-4">
        <Link to={`/edit/${currentPost._id}`} className="text-blue-400 hover:underline">
        Edit
        </Link>
        <button
          onClick={handleDelete}
          className="text-red-400 hover:underline"
        >
          Delete
        </button>
        <Link to="/" className="text-blue-400 hover:underline">
        Back to Home
        </Link>
      </div>
    </div>
  );
}

export default PostDetail;