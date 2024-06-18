import Link from 'next/link';

export default function SliderItem({
  poster_path,
  backdrop_path,
  title,
  width,
  id,
  isGenre,
}) {
  return (
    <Link
      style={{ width: `${width}%` }}
      className="py-0 px-1 inline-block bg-contain hover:scale-150 ease-in duration-500 transition-all"
      href={`/popular/${id}`}
    >
      <img
        src={`https://image.tmdb.org/t/p/original/${
          !isGenre ? poster_path : backdrop_path
        }`}
        alt={title}
        className="w-full max-w-full block rounded"
      />
      <h6 className="hidden">{title}</h6>
    </Link>
  );
}
