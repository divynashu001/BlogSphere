import { Link } from 'react-router-dom';
import { FaHome, FaPlus } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="bg-gray-800 py-4 mb-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-100">
          BlogSphere
        </Link>
        <div className="flex gap-5 text-2xl font-light">
          <Link to="/" className="text-gray-300 hover:text-black  flex items-center">
            <FaHome className="mr-1" />
          </Link>
          <Link to="/create" className="text-gray-300 hover:text-black flex items-center">
            <FaPlus className="mr-1" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;