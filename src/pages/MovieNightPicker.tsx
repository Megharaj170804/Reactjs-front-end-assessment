import React, { useState, useMemo } from 'react';
import MovieCard from '../components/MovieCard';
import { movies } from '../data/mockData';
import { X, Shuffle } from 'lucide-react';

const MovieNightPicker: React.FC = () => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedMoods, setSelectedMoods] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(true);

  const genres = [...new Set(movies.flatMap(movie => movie.genre))];
  const moods = [...new Set(movies.flatMap(movie => movie.mood))];
  function filterMovies(moviesList: typeof movies, genres: string[], moods: string[]) {
    return moviesList.filter(movie => {
      const genreMatch = genres.length === 0 || genres.some(genre => movie.genre.includes(genre));
      const moodMatch = moods.length === 0 || moods.some(mood => movie.mood.includes(mood));
      return genreMatch && moodMatch;
    });
  }

  const filteredMovies = useMemo(() => filterMovies(movies, selectedGenres, selectedMoods), [selectedGenres, selectedMoods]);

  const handleGenreToggle = (genre: string) => {
    setSelectedGenres(prev =>
      prev.includes(genre)
        ? prev.filter(g => g !== genre)
        : [...prev, genre]
    );
  };

  const handleMoodToggle = (mood: string) => {
    setSelectedMoods(prev =>
      prev.includes(mood)
        ? prev.filter(m => m !== mood)
        : [...prev, mood]
    );
  };

  const clearAllFilters = () => {
  setSelectedGenres([]);
  setSelectedMoods([]);
  };

  const getRandomMovie = () => {
    if (filteredMovies.length > 0) {
      const randomIndex = Math.floor(Math.random() * filteredMovies.length);
      const randomMovie = filteredMovies[randomIndex];
      alert(`🎬 Your random pick: ${randomMovie.title}!`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Movie Night Picker
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Can't decide what to watch? Filter by genre, mood, and rating to find your perfect movie
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <h2 className="text-xl font-semibold text-gray-900">Filters</h2>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={clearAllFilters}
                className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="h-4 w-4" />
                <span>Clear All</span>
              </button>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="text-blue-600 hover:text-blue-700 transition-colors"
              >
                {showFilters ? 'Hide' : 'Show'} Filters
              </button>
            </div>
          </div>

          {showFilters && (
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Genres</h3>
                <div className="flex flex-wrap gap-2">
                  {genres.map(genre => (
                    <button
                      key={genre}
                      onClick={() => handleGenreToggle(genre)}
                      className={`px-4 py-2 rounded-full border transition-all duration-200 ${
                        selectedGenres.includes(genre)
                          ? 'bg-blue-500 text-white border-blue-500 shadow-md'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300 hover:bg-blue-50'
                      }`}
                    >
                      {genre}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Mood</h3>
                <div className="flex flex-wrap gap-2">
                  {moods.map(mood => (
                    <button
                      key={mood}
                      onClick={() => handleMoodToggle(mood)}
                      className={`px-4 py-2 rounded-full border transition-all duration-200 capitalize ${
                        selectedMoods.includes(mood)
                          ? 'bg-purple-500 text-white border-purple-500 shadow-md'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-purple-300 hover:bg-purple-50'
                      }`}
                    >
                      {mood}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredMovies.length} Movies Found
            </h2>
            {(selectedGenres.length > 0 || selectedMoods.length > 0) && (
              <p className="text-gray-600 mt-1">
                Filtered by your preferences
              </p>
            )}
          </div>
          
          {filteredMovies.length > 0 && (
            <button
              onClick={getRandomMovie}
              className="flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Shuffle className="h-5 w-5" />
              <span className="font-medium">Pick Random</span>
            </button>
          )}
        </div>
        {filteredMovies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMovies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🎬</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No movies match your filters
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your filters to see more results
            </p>
            <button
              onClick={clearAllFilters}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieNightPicker;