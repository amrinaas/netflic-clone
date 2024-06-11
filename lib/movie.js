export async function getPopularMovie() {
  const response = await fetch(
    `${process.env.TMDB_URL}/movie/popular?api_key=${process.env.TMDB_API_KEY}`
  );
  if (!response.ok) {
    throw new Error('Error fetch popular movies');
  }

  const movie = await response.json();

  return movie;
}
