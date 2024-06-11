import Slider from '@/components/movie/slider';
import { getPopularMovie } from '@/lib/movie';

export default async function BrowsePage() {
  const result = await getPopularMovie();
  const movie = result.results;

  return (
    <div>
      <Slider movies={movie} />
    </div>
  );
}
