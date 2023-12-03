document.addEventListener('DOMContentLoaded', function () {
    const getWeatherButton = document.getElementById('add');
    const searchButton = document.getElementById('button-addon2');

    const getWeatherResultContainer = document.getElementById('getWeatherResultContainer');
    const searchResultContainer = document.getElementById('searchResultContainer');

    getWeatherButton.addEventListener('click', function () {
        // Toggle the visibility of the get weather result container
        getWeatherResultContainer.style.display = getWeatherResultContainer.style.display === 'none' ? 'block' : 'none';
    });

    searchButton.addEventListener('click', function () {
        // Toggle the visibility of the search result container
        searchResultContainer.style.display = searchResultContainer.style.display === 'none' ? 'block' : 'none';
    });
});
