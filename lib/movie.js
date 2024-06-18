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

export async function getListOfGenre() {
  try {
    const response = await fetch(
      `${process.env.TMDB_URL}/genre/movie/list?api_key=${process.env.TMDB_API_KEY}`
    );

    const genre = await response.json();

    return genre;
  } catch (error) {
    return {
      statusCode: 500,
      body: error.toString(),
    };
  }
}

export async function getMovieByGenre(genre) {
  try {
    const response = await fetch(
      `${process.env.TMDB_URL}/discover/movie?with_genres=${genre}&api_key=${process.env.TMDB_API_KEY}`
    );

    const movie = await response.json();

    return movie;
  } catch (error) {
    return {
      statusCode: 500,
      body: error.toString(),
    };
  }
}
