import MainHeader from '@/components/header/main-header';

export const metadata = {
  title: 'TV Shows - Netfliks',
};
export default function TvShowsLayout({ feature, trending }) {
  return (
    <section>
      <MainHeader />
      {feature}
      {trending}
    </section>
  );
}
