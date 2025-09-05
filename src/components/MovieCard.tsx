import React from 'react';
import { Star } from 'lucide-react';
import { Movie } from '../data/mockData';

interface MovieCardProps {
  movie: Movie;
  onClick?: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 overflow-hidden"
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        <img
          src={movie.posterUrl}
          alt={movie.title}
          className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded-full flex items-center space-x-1">
          <Star className="h-4 w-4 fill-current text-yellow-400" />
          <span className="text-sm font-medium">{movie.rating}</span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-900 mb-1 truncate">
          {movie.title}
        </h3>
        <p className="text-sm text-gray-600 mb-2">{movie.year} • {movie.director}</p>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {movie.genre.slice(0, 2).map((genre) => (
            <span
              key={genre}
              className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full"
            >
              {genre}
            </span>
          ))}
        </div>
        
        <p className="text-sm text-gray-700 line-clamp-2">
          {movie.description}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;