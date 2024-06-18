import MainHeader from '@/components/header/main-header';

export const metadata = {
  title: 'Home - Netfliks',
};
export default function BrowseLayout({ feature, popular, genre }) {
  return (
    <section>
      <MainHeader />
      {feature}
      {popular}
      {genre}
    </section>
  );
}
