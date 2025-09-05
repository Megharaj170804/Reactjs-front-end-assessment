import React from 'react';
import PostCard from '../components/PostCard';
import { feedPosts } from '../data/mockData';

const CineFeed: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            CineFeed
          </h1>
        </div>  
        <div className="space-y-6">
          {feedPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CineFeed;