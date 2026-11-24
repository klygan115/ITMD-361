document.addEventListener("DOMContentLoaded", function () {

    /* Makes the Question button function properly. */
    const questionButtons = document.querySelectorAll(".questions-button");

    questionButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            alert("If you have questions, contact me at:\nklygan@hawk.iit.edu");
        });
    });

    /* Loads Google Maps only on the Google Maps page. */
    const mapElement = document.getElementById("map");

    if (mapElement) {
        const mapsScript = document.createElement("script");

        mapsScript.src =
            "https://maps.googleapis.com/maps/api/js?key=AIzaSyBM1F-BpX660SBK3-Vw9O9f7AEvTAIH8rI&callback=initMap";

        mapsScript.async = true;
        mapsScript.defer = true;

        mapsScript.onerror = function () {
            mapElement.textContent =
                "Google Maps could not load. Check the API key, billing, and API restrictions.";
        };

        document.head.appendChild(mapsScript);
    }

});