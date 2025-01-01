document.getElementById('searchInput').addEventListener('input', function() {
    const searchWord = this.value.toLowerCase();
    const movies = document.querySelectorAll('.movie-item');

    movies.forEach(movie => {
        const title = movie.querySelector('p').textContent.toLowerCase();
        if (title.includes(searchWord)) {
            movie.style.display = 'block';  // Show matching movie/show
        } else {
            movie.style.display = 'none';   // Hide non-matching movie/show
        }
    });
});