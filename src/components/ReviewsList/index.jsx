import { getMovieReviews } from 'service/themoviedbAPI';
import { AdditionalInfoTitle } from 'components/MovieCard/MovieCard.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewCard } from './ReviewsList.styled';
import { StyledList } from 'components/MoviesList/MovieList.styled';
import { ToastContainer, toast } from 'react-toastify';
import Skeleton from 'react-loading-skeleton';
import 'react-toastify/dist/ReactToastify.css';

const ReviewsList = () => {
  const { movieID } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (reviews.length === 0) {
      setIsLoading(true);
      getMovieReviews(movieID, 'uk-UA')
        .then(data => {
          if (data.results.length > 0) setReviews(data.results);
        })
        .catch(error => console.log(error))
        .finally(() => setIsLoading(false));
    }

    if (reviews.length === 0) {
      setIsLoading(true);
      getMovieReviews(movieID, 'en-US')
        .then(data => {
          if (data.results.length > 0) {
            setReviews(data.results);
            toast.info(
              `Нажаль, поки ніхто не залишив україномовні вігуки, але ось англомовні
          відгуки`
            );
          }
        })
        .catch(error => console.log(error))
        .finally(() => setIsLoading(false));
    }
  }, [movieID, reviews]);

  return (
    <div>
      <AdditionalInfoTitle>Огляди</AdditionalInfoTitle>
      {isLoading && <Skeleton count={5} />}
      {reviews.length === 0 && (
        <p>Поки ніхто не додав відгуків про цей фільм</p>
      )}
      {reviews.length > 0 && (
        <StyledList>
          {reviews.map(({ author, content, created_at, id }) => (
            <li key={id}>
              <ReviewCard>
                <p className="author">{author}</p>
                <p className="overview">{content}</p>
                <p className="created_at">Створено: {Date(created_at)}</p>
              </ReviewCard>
            </li>
          ))}
        </StyledList>
      )}
      <ToastContainer />
    </div>
  );
};

export default ReviewsList;
