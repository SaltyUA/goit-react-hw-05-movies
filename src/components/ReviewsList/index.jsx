import { getMovieReviews } from 'api/themoviedbAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ReviewsList = () => {
  const { movieID } = useParams();
  const [reviews, setReviews] = useState([]);
  const [engRevivews, setEngRevivews] = useState(false);
  useEffect(() => {
    if (reviews.length === 0)
      getMovieReviews(movieID, 'uk-UA')
        .then(data => setReviews(data.results))
        .catch(error => console.log(error));
    if (reviews.length === 0)
      getMovieReviews(movieID, 'en-US')
        .then(data => {
          setReviews(data.results);
          setEngRevivews(true);
        })
        .catch(error => console.log(error));
  }, [movieID, reviews]);
  return (
    <div>
      <h3>Огляди</h3>
      {engRevivews && (
        <p>
          Нажаль, поки ніхто не залишив україномовні вігуки, але ось англомовні
          відгуки
        </p>
      )}
      {reviews.length > 0 && (
        <ul>
          {reviews.map(({ author, content, created_at, id }) => (
            <li key={id}>
              <div>
                <p>{author}</p>
                <p>{content}</p>
                <p>Створено: {Date(created_at)}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReviewsList;
