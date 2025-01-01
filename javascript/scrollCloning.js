document.addEventListener("DOMContentLoaded", () => {
    const movieLists = document.querySelectorAll(".movie-list");

    movieLists.forEach(movieList => {
        if (!movieList) return;

        const middlePosition = movieList.scrollWidth / 2 - movieList.clientWidth / 2;
        movieList.scrollLeft = middlePosition;



        // Translate vertical scroll to horizontal scroll
        movieList.addEventListener("wheel", (event) => {
            event.preventDefault(); // Prevent default vertical scrolling
            movieList.scrollLeft += event.deltaY; // Scroll horizontally
        });
    });
});