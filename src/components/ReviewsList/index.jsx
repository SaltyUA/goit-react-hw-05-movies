import { getMovieReviews } from 'api/themoviedbAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ReviewsList = () => {
  const { movieID } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    getMovieReviews(movieID)
      .then(data => setReviews(data))
      .catch(error => console.log(error));
  }, [movieID]);
  console.log(reviews);
  return (
    <div>
      <h3>Reviews</h3>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ author, content, created_at }) => (
            <li>
              <div>
                <h2>{author}</h2>
                <p>Review: {content}</p>
                <p>Created at: {created_at}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Поки ніхто не залишив відгук про цей фільм</p>
      )}
    </div>
  );
};

export default ReviewsList;
