import { useState, useReducer, useEffect, useMemo, useCallback } from 'react';
import useFetchPhotos from './hooks/useFetchPhotos';
import SearchBar from './components/SearchBar';
import PhotoGrid from './components/PhotoGrid';

// Mandatory useReducer for favourites management (Requirement #5)
const favouritesReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_FAVOURITE':
      const exists = state.some((fav) => fav.id === action.payload.id);
      if (exists) {
        return state.filter((fav) => fav.id !== action.payload.id);
      }
      return [...state, action.payload];
    default:
      return state;
  }
};

function App() {
  const { photos, loading, error } = useFetchPhotos();
  const [searchQuery, setSearchQuery] = useState('');
  
  // Favourites state with LocalStorage persistence (Requirement #5)
  const [favourites, dispatch] = useReducer(favouritesReducer, [], () => {
    const saved = localStorage.getItem('favourites');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);

  // useCallback for the search filter handler (Requirement #7)
  const handleSearchChange = useCallback((e) => {
    setSearchQuery(e.target.value);
  }, []);

  // useMemo to compute the filtered photo list in real-time (Requirement #7)
  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [photos, searchQuery]);

  const toggleFavourite = (photo) => {
    dispatch({ type: 'TOGGLE_FAVOURITE', payload: photo });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F9FAFB] pb-20">
      <header className="py-12 text-center px-4">
        <h1 className="text-4xl font-bold text-[#7C3AED]">Photo Gallery</h1>
      </header>

      <SearchBar 
        searchQuery={searchQuery} 
        onSearch={handleSearchChange} 
      />

      <main className="max-w-7xl mx-auto px-4">
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#7C3AED]"></div>
          </div>
        )}

        {error && (
          <div className="text-center py-20">
            <p className="text-[#EF4444] text-xl font-medium">Error: {error}</p>
          </div>
        )}

        {!loading && !error && (
          <>
            <PhotoGrid 
              photos={filteredPhotos} 
              favourites={favourites} 
              onToggleFavourite={toggleFavourite} 
            />
            {filteredPhotos.length === 0 && (
              <div className="text-center py-20">
                <p className="text-[#6B7280] text-lg">
                  No authors found matching "{searchQuery}"
                </p>
              </div>
            )}
          </>
        )}
      </main>

      <footer className="mt-12 text-center text-[#6B7280] text-sm py-8">
        Built with React + Vite + Tailwind
      </footer>
    </div>
  );
}

export default App;