import Hero from '@/components/movie/hero';
import { getPopularMovie } from '@/lib/movie';

export default async function Feature() {
  const result = await getPopularMovie();
  const movie = result.results;

  return (
    <div>
      <Hero data={movie} />
    </div>
  );
}
