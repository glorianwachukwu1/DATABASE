document.addEventListener('DOMContentLoaded', function () {
    const getWeatherButton = document.getElementById('getWeatherButton');
    const getWeatherResultContainer = document.getElementById('getWeatherResultContainer');

    // Function to toggle the visibility of the get weather result container
    function toggleWeatherResult() {
        getWeatherResultContainer.style.display = (getWeatherResultContainer.style.display === 'none') ? 'block' : 'none';
    }

    // Call the toggle function when the get weather button is clicked
    getWeatherButton.addEventListener('click', toggleWeatherResult);
});
