import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../redux/actions/postsActions';

function PostList() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="space-y-6">
      {loading && <p className="text-gray-400">Loading...</p>}
      {error && <p className="text-red-400">{error}</p>}
      {posts.map(post => (
        <div
          key={post._id}
          className="border border-gray-700 rounded-lg p-6 shadow-sm bg-gray-800"
        >
          <h2 className="text-xl font-semibold">
            <Link to={`/post/${post._id}`} className="text-gray-100 hover:underline">
              {post.title}
            </Link>
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            By {post.author} • {Math.floor((new Date() - new Date(post.timestamp)) / (1000 * 60 * 60 * 24 * 365))} years ago
          </p>
          <p className="mt-3 text-gray-300">{post.content.substring(0, 150)}</p>
          <Link to={`/post/${post._id}`} className="text-blue-400 hover:underline mt-3 inline-block">
            Read more
          </Link>
        </div>
      ))}
    </div>
  );
}

export default PostList;