import Hero from '@/components/movie/hero';
import { getTrendingShows } from '@/lib/tv-show';

export default async function Feature() {
  const result = await getTrendingShows();
  const show = result.results;

  return (
    <div>
      <Hero data={show} />
    </div>
  );
}
