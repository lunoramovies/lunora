// Example search function
function searchMovies(query) {
    const results = [];
    const queryLower = query.toLowerCase();

    for (const key in movies) {
        if (movies.hasOwnProperty(key)) {
            const movie = movies[key];
            if (movie.title && movie.title.toLowerCase().includes(queryLower)) {
                results.push(movie);
            }
        }
    }

    return results;
}

// Example usage
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', function() {
    const query = searchInput.value;
    const found = searchMovies(query); // Define the found variable here

    // Assuming you want to display the search results
    displaySearchResults(found);
});

function displaySearchResults(results) {
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = ''; // Clear previous results

    results.forEach(result => {
        const resultItem = document.createElement('div');
        resultItem.textContent = result.title;
        resultsContainer.appendChild(resultItem);
    });
}