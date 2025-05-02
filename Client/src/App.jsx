import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from './store';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostDetail from "./components/PostDetail";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <div className="flex-grow container mx-auto px-4 py-6 bg-gray-900 text-gray-100">
            <main>
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <header className="mb-10 text-center">
                        <h1 className="text-2xl font-bold">Welcome to BlogSphere</h1>
                        <p className="text-base text-gray-400 mt-1">
                          Read and share amazing stories
                        </p>
                      </header>
                      <PostList />
                    </>
                  }
                />
                <Route path="/create" element={<PostForm />} />
                <Route path="/edit/:id" element={<PostForm />} />
                <Route path="/post/:id" element={<PostDetail />} />
              </Routes>
            </main>
          </div>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;