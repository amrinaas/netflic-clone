export default function GridItem({ name, poster_path, backdrop_path }) {
  return (
    <article className="pb-3 border-2 border-gray-900 rounded-md flex flex-col items-center">
      <img
        src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}${backdrop_path}`}
        alt={name}
        className="rounded-t-md"
      />
      <p className="pt-2">{name}</p>
    </article>
  );
}
