import Slider from '@/components/movie/slider';
import { getMovieByGenre, getListOfGenre } from '@/lib/movie';

export default async function MovieByGenre() {
  const response = await getListOfGenre();
  const genres = response.genres;

  const getMultipleRandom = (arr, num) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num);
  };

  return (
    <section>
      {getMultipleRandom(genres, 5).map(async (genre, i) => {
        const result = await getMovieByGenre(genre.id);
        const movie = result.results;
        return (
          <div key={i}>
            <Slider movies={movie} title={genre.name} isGenre={true} />
          </div>
        );
      })}
    </section>
  );
}
