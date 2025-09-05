import React, { useState } from 'react';
import { Heart, MessageCircle } from 'lucide-react';
import { Post } from '../data/mockData';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const [likes, setLikes] = useState(post.likes);
  const [isLiked, setIsLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
      <div className="flex items-center p-4 border-b border-gray-100">
        <img
          src={post.user.profilePicUrl}
          alt={post.user.username}
          className="w-12 h-12 rounded-full object-cover ring-2 ring-purple-100"
        />
        <div className="ml-3 flex-1">
          <h3 className="font-semibold text-gray-900 hover:text-purple-600 cursor-pointer">
            {post.user.username}
          </h3>
          <p className="text-sm text-gray-500">{post.timestamp}</p>
        </div>
      </div>
      <div className="p-4">
        <div className="flex gap-4">
          <img
            src={post.post.moviePosterUrl}
            alt={post.post.movieTitle}
            className="w-24 h-36 rounded-lg object-cover shadow-md"
          />
          <div className="flex-1">
            <h4 className="font-bold text-lg text-gray-900 mb-2">
              {post.post.movieTitle}
            </h4>
            <p className="text-gray-700 leading-relaxed">
              {post.post.text}
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 py-3 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <button
              onClick={handleLike}
              className={`flex items-center space-x-2 px-3 py-1.5 rounded-full transition-all duration-200 ${
                isLiked
                  ? 'bg-red-50 text-red-600 hover:bg-red-100'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
              <span className="font-medium">{likes}</span>
            </button>

            <button
              onClick={() => setShowComments(!showComments)}
              className="flex items-center space-x-2 px-3 py-1.5 rounded-full text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              <span className="font-medium">{post.comments.length}</span>
            </button>

           
          </div>
        </div>
        {showComments && post.comments.length > 0 && (
          <div className="mt-4 space-y-3">
            {post.comments.map((comment) => (
              <div key={comment.id} className="bg-gray-50 rounded-lg p-3">
                <div className="flex items-start space-x-2">
                  <span className="font-semibold text-sm text-purple-600">
                    {comment.user}
                  </span>
                  <span className="text-sm text-gray-700 flex-1">
                    {comment.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PostCard;