import React from 'react';
import PhotoCard from './PhotoCard';

const PhotoGrid = ({ photos, favourites, onToggleFavourite }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 pb-12">
      {photos.map((photo) => (
        <PhotoCard
          key={photo.id}
          photo={photo}
          isFavourite={favourites.some((fav) => fav.id === photo.id)}
          onToggleFavourite={onToggleFavourite}
        />
      ))}
    </div>
  );
};

export default PhotoGrid;
