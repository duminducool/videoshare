import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn, UserPlus } from 'lucide-react';
import { useStore } from '../store/useStore';

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login, register } = useStore();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isRegistering) {
      register(name, password);
      login(name, password);
    } else {
      const success = login(name, password);
      if (!success) {
        alert('Invalid credentials');
        return;
      }
    }
    
    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="flex items-center justify-center mb-8">
          {isRegistering ? (
            <UserPlus size={32} className="text-indigo-600" />
          ) : (
            <LogIn size={32} className="text-indigo-600" />
          )}
        </div>
        <h1 className="text-2xl font-bold text-center mb-8 text-gray-900">
          {isRegistering ? 'Create Account' : 'Welcome Back'}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-200"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-200"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
          >
            {isRegistering ? 'Create Account' : 'Sign In'}
          </button>

          <button
            type="button"
            onClick={() => setIsRegistering(!isRegistering)}
            className="w-full text-center text-sm text-indigo-600 hover:text-indigo-700 font-medium transition-colors duration-200"
          >
            {isRegistering
              ? 'Already have an account? Sign in'
              : "Don't have an account? Create one"}
          </button>
        </form>
      </div>
    </div>
  );
};