import React from 'react';

// Assuming you are using FontAwesome for icons
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const StarRating = ({ rating }) => {
  // Calculate the number of full, half, and empty stars
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <div>
      {Array(fullStars)
        .fill()
        .map((_, index) => (
          <FaStar key={`full-${index}`} color="gold" />
        ))}
      {Array(halfStars)
        .fill()
        .map((_, index) => (
          <FaStarHalfAlt key={`half-${index}`} color="gold" />
        ))}
      {Array(emptyStars)
        .fill()
        .map((_, index) => (
          <FaRegStar key={`empty-${index}`} color="gold" />
        ))}
    </div>
  );
};

export default StarRating;
