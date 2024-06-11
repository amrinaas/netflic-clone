import Link from 'next/link';

export default function SliderItem({ poster_path, title, width, id }) {
  return (
    // <Link
    //   style={{ width: `${width}%` }}
    //   className="text-white relative ease-in focus-within:-translate-x-1/4 duration-500 focus:translate-x-1/4 hover:translate-x-1/4 focus:scale-150 focus:z-10 hover:scale-150 hover:z-10 py-0 px-1 inline-block first-of-type:pl-0 last-of-type:pr-0"
    //   href={`/movie/${id}`}
    // >
    <Link
      style={{ width: `${width}%` }}
      className="py-0 px-1 inline-block first-of-type:pl-0 last-of-type:pr-0"
      href={`/popular/${id}`}
    >
      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt={title}
        className="w-full max-w-full block rounded"
      />
      <h6 className="hidden">{title}</h6>
    </Link>
  );
}
