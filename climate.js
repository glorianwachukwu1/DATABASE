document.addEventListener('DOMContentLoaded', function () {
    const getWeatherButton = document.getElementById('getWeatherButton');
    const getWeatherResultContainer = document.getElementById('getWeatherResultContainer');
    const getStatsButton = document.getElementById('getStatsButton');
    const getStatsResultContainer = document.getElementById('getStatsResultContainer');
    const clearButton = document.getElementById('clearButton');

    // Function to toggle the visibility of the get weather result container
    function toggleWeatherResult() {
        getWeatherResultContainer.style.display = (getWeatherResultContainer.style.display === 'none') ? 'block' : 'none';
        // Hide the stats container when showing weather results
        getStatsResultContainer.style.display = 'none';
    }

    // Function to toggle the visibility of the get stats result container
    function toggleStatsResult() {
        getStatsResultContainer.style.display = (getStatsResultContainer.style.display === 'none') ? 'block' : 'none';
        // Hide the weather container when showing stats results
        getWeatherResultContainer.style.display = 'none';
    }

    // Function to clear the tables
    function clearTables() {
        // Clear the content of both result containers
        getWeatherResultContainer.style.display = 'none';
        getStatsResultContainer.style.display = 'none';
    }

    // Call the toggle function when the get weather button is clicked
    getWeatherButton.addEventListener('click', toggleWeatherResult);

    // Call the toggle function when the get stats button is clicked
    getStatsButton.addEventListener('click', toggleStatsResult);

    // Call the clear function when the clear button is clicked
    clearButton.addEventListener('click', clearTables);
});
