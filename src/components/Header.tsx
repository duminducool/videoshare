import React from 'react';
import { Link } from 'react-router-dom';
import { Upload, User, LogIn, Video } from 'lucide-react';
import { useStore } from '../store/useStore';

export const Header: React.FC = () => {
  const currentUser = useStore(state => state.currentUser);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-4 my-4">
        <div className="max-w-7xl mx-auto backdrop-blur-md bg-white/80 rounded-2xl shadow-lg px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700">
              <Video size={24} className="text-indigo-600" />
              <span className="text-xl font-bold">VideoShare</span>
            </Link>

            <div className="flex items-center space-x-6">
              <Link
                to="/upload"
                className="flex items-center space-x-1 px-4 py-2 rounded-lg text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
              >
                <Upload size={20} />
                <span>Upload</span>
              </Link>

              {currentUser ? (
                <Link
                  to="/profile"
                  className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                >
                  <User size={20} />
                  <span>{currentUser.name}</span>
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                >
                  <LogIn size={20} />
                  <span>Login</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};