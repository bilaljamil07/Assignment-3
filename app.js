const movies = require('./data.json');

const genreInput = document.getElementById('genre');
const ratingInput = document.getElementById('rating');
const releaseYearInput = document.getElementById('release-year');
const recommendBtn = document.getElementById('recommend-btn');
const movieList = document.getElementById('movie-list');

recommendBtn.addEventListener('click', () => {
	// Get the user's input values
	const genre = genreInput.value;
	const rating = ratingInput.value;
	const releaseYear = releaseYearInput.value;


	const filteredMovies = movies.filter(movie => {
		return movie.genre.toLowerCase().includes(genre.toLowerCase())
			&& movie.rating >= rating
			&& movie.releaseYear >= releaseYear;
	});

	movieList.innerHTML = '';


	if (filteredMovies.length > 0) {
		filteredMovies.forEach(movie => {
			const movieElem = document.createElement('div');
			movieElem.innerHTML = `<strong>${movie.title}</strong> (${movie.releaseYear}) - ${movie.genre} - ${movie.rating}/10`;
			movieList.appendChild(movieElem);
		});
	} else {
		const noMoviesElem = document.createElement('p');
		noMoviesElem.textContent = 'No movies found!';
		movieList.appendChild(noMoviesElem);
	}
});