import { getMovieCast } from 'api/themoviedbAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Castlist = () => {
  const { movieID } = useParams();
  console.log(movieID);
  const [cast, setCast] = useState([]);
  useEffect(() => {
    getMovieCast(movieID)
      .then(data => setCast(data.cast))
      .catch(error => console.log(error));
  }, [movieID]);
  console.log(cast);
  return (
    <div>
      <h3>Cast</h3>
      {cast && (
        <ul>
          {cast.map(({ name, profile_path, character }) => (
            <li>
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                  alt={name}
                />
                <h2>{name}</h2>
                <p>Character: {character}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Castlist;
