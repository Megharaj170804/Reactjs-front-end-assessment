import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Film, Heart, List, Filter } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/cinefeed', icon: Heart, label: 'CineFeed' },
    { path: '/flicklist', icon: List, label: 'FlickList' },
    { path: '/movie-picker', icon: Filter, label: 'Movie Picker' }
  ];

  return (
    <nav className="bg-gradient-to-r from-purple-800 via-blue-800 to-indigo-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/cinefeed" className="flex items-center space-x-2 text-white hover:text-purple-200 transition-colors">
            <Film className="h-8 w-8" />
            <span className="text-xl font-bold">CineHub</span>
          </Link>
          
          <div className="flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-white/20 text-white shadow-md'
                      : 'text-purple-100 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;