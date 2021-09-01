const API_KEY="ebedbbfa81b6f5e2d7749da361fafcef";
const requests={
fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
fetchPopular:`/movie/popular?api_key=${API_KEY}&language=en-US`,
fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
fetchNetflix:`discover/tv?api_key=${API_KEY}&with_networks=213`
}
export default requests;