import { getMovieCast } from 'service/themoviedbAPI';
import { StyledList } from 'components/MoviesList/MovieList.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastCard } from './CastList.styled';
import { AdditionalInfoTitle } from 'components/MovieCard/MovieCard.styled';
import { getPoster } from 'service/getImage';

const Castlist = () => {
  const { movieID } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    getMovieCast(movieID)
      .then(data => setCast(data.cast))
      .catch(error => console.log(error));
  }, [movieID]);

  return (
    <div>
      <AdditionalInfoTitle>В ролях</AdditionalInfoTitle>
      {cast && (
        <StyledList>
          {cast.map(({ name, profile_path, character, id }) => {
            const poster = getPoster(profile_path, 200);
            return (
              <li key={id}>
                <CastCard>
                  <img src={poster} alt={name} />
                  <h2>{name}</h2>
                  <p>{character}</p>
                </CastCard>
              </li>
            );
          })}
        </StyledList>
      )}
    </div>
  );
};

export default Castlist;
