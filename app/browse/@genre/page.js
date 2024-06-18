import Slider from '@/components/movie/slider';
import { getMovieByGenre, getListOfGenre } from '@/lib/movie';

export default async function MovieByGenre() {
  const response = await getListOfGenre();
  const genres = response.genres;

  return (
    <section>
      {genres.map(async (genre, i) => {
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
