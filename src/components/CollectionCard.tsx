import React from 'react';
import { Play, ArrowRight } from 'lucide-react';
import { Collection } from '../data/mockData';

interface CollectionCardProps {
  collection: Collection;
  onClick?: () => void;
}

const CollectionCard: React.FC<CollectionCardProps> = ({ collection, onClick }) => {
  return (
    <div 
      className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
      onClick={onClick}
    >
      <div className="relative h-64">
        <img
          src={collection.coverImage}
          alt={collection.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
            <Play className="h-6 w-6 text-white fill-current" />
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-bold text-white mb-2">
            {collection.title}
          </h3>
          <p className="text-white/90 text-sm mb-4 line-clamp-2">
            {collection.description}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-white/80 text-sm">
              {collection.movies.length} movies
            </span>
            <div className="flex items-center space-x-2 text-white/90 group-hover:text-white transition-colors">
              <span className="text-sm font-medium">Explore</span>
              <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;