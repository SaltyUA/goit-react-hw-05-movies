import { useState } from 'react';
import { useParams } from 'react-router-dom';

const ReviewsList = () => {
    const { movieID } = useParams();
  const [reviews, setCast] = useState([]);
  useEffect(() => {
    getMovieCast(movieID)
      .then(data => setCast(data.results))
      .catch(error => console.log(error));
  }, []);
  console.log(reviews);
  return (
    <div>
      <h3>Reviews</h3>
      {reviews && (
        <ul>
          {reviews.map(({ author, content, created_at }) => (
            <li>
              <div>
                
                <h2>{author}</h2>
                <p>Character: {character}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
};

export default ReviewsList;
