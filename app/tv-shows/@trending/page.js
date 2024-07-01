import Grid from '@/components/movie/grid';
import { getTrendingShows } from '@/lib/tv-show';

export default async function TrendingShowPage() {
  const result = await getTrendingShows();
  const items = result.results;

  if (!items.length) return null;

  return (
    <div className="px-3 py-2 mx-10 my-2">
      <h1 className="text-5xl font-thin">Trending Today</h1>
      <Grid items={items} />
    </div>
  );
}
