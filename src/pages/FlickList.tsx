import React, { useState } from 'react';
import CollectionCard from '../components/CollectionCard';
import MovieCard from '../components/MovieCard';
import { collections } from '../data/mockData';
import { ArrowLeft, Grid, List as ListIcon } from 'lucide-react';

const FlickList: React.FC = () => {
  const [selectedCollection, setSelectedCollection] = useState<typeof collections[0] | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const handleCollectionSelect = (collection: any) => {
    setSelectedCollection(collection);
  };

  const handleBackToCollections = () => {
    setSelectedCollection(null);
  };

  if (selectedCollection) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={handleBackToCollections}
              className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Back to Collections</span>
            </button>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-purple-100 text-purple-600' : 'text-gray-500 hover:text-gray-700'}`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-purple-100 text-purple-600' : 'text-gray-500 hover:text-gray-700'}`}
              >
                <ListIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {selectedCollection.title}
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              {selectedCollection.description}
            </p>
            <div className="text-sm text-purple-600 font-medium">
              {selectedCollection.movies.length} movies in this collection
            </div>
          </div>

          <div className={viewMode === 'grid' ? 
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" : 
            "space-y-4"
          }>
            {selectedCollection.movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            FlickList
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover curated collections of movies handpicked by cinephiles. From genre-defining classics to hidden gems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <CollectionCard
              key={collection.id}
              collection={collection}
              onClick={() => handleCollectionSelect(collection)}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default FlickList;