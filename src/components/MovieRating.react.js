import React from 'react';

import './MovieRating.css';

function MovieRating(props) {
  const rating = Math.floor((props.voteAverage || 0) * 10);
  const color = rating >= 70 ? "circular-chart green" : "circular-chart orange";
  const dashArray = `${rating}, 100`;

  return (
    <div className="single-chart">
      <svg viewBox="0 0 36 36" className={color}>
        <path className="circle-bg"
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path className="circle"
          strokeDasharray={dashArray}
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <text x="18" y="20.35" className="percentage">{rating}%</text>
      </svg>
    </div>
  );
}

export default MovieRating;
