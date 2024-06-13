import Slider from '@/components/movie/slider';
import { getPopularMovie } from '@/lib/movie';

export default async function BrowsePage() {
  const result = await getPopularMovie();
  const movie = result.results;

  return (
    <section className="ml-10">
      <h1 className="font-semibold text-xl mb-2">Popular Now</h1>
      <Slider movies={movie} />
    </section>
  );
}
