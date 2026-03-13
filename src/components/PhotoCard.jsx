import React from 'react';

const PhotoCard = ({ photo, isFavourite, onToggleFavourite }) => {
  return (
    <div className="bg-[#141414] rounded-xl overflow-hidden border border-gray-800 transition-all group">
      <div className="aspect-square overflow-hidden">
        <img
          src={photo.download_url}
          alt={photo.author}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4 flex justify-between items-center">
        <p className="text-[#F9FAFB] font-medium truncate pr-2">{photo.author}</p>
        <button
          onClick={() => onToggleFavourite(photo)}
          className={`transition-colors ${isFavourite ? 'text-[#EF4444]' : 'text-[#6B7280] hover:text-[#EF4444]'}`}
          aria-label={isFavourite ? "Remove from favorites" : "Add to favorites"}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill={isFavourite ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PhotoCard;
