import MainHeader from '@/components/header/main-header';

export const metadata = {
  title: 'Home - Netfliks',
};
export default function BrowseLayout({ popular }) {
  return (
    <section>
      <MainHeader />
      {popular}
    </section>
  );
}
