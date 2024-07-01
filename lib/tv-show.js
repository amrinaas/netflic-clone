export async function getTrendingShows() {
  try {
    const response = await fetch(
      `${process.env.TMDB_URL}/trending/tv/day?language=en-US&api_key=${process.env.TMDB_API_KEY}`
    );

    const shows = await response.json();

    return shows;
  } catch (error) {
    return {
      statusCode: 500,
      body: error.toString(),
    };
  }
}
