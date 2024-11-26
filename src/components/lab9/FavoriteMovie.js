import React from 'react';

function FavoriteMovie() {
  return (
    <div>
      <h2>Ulubiony film</h2>
      <p>Moim ulubionym filmem jest "Inception".</p>
      <img src={process.env.PUBLIC_URL + "/inc.jpg"} alt="Placeholder"/>
    </div>
  );
}

export default FavoriteMovie;
