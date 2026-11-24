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

/* Google Maps initialization function. */
window.initMap = function () {

    const mapElement = document.getElementById("map");

    if (!mapElement || !window.google || !google.maps) {
        return;
    }

    const chicagoCenter = {
        lat: 41.8781,
        lng: -87.6298
    };

    const map = new google.maps.Map(mapElement, {

        center: chicagoCenter,
        zoom: 11,

        mapTypeControl: true,

        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            position: google.maps.ControlPosition.TOP_RIGHT
        },

        streetViewControl: true,
        fullscreenControl: true

    });

    /* Feature 1: Displays 3 locations on the map. */
    const locations = [

        {
            title: "Illinois Institute of Technology",
            position: {
                lat: 41.8349,
                lng: -87.6270
            },
            description: "Illinois Institute of Technology is located on Chicago's South Side."
        },

        {
            title: "Millennium Park",
            position: {
                lat: 41.8826,
                lng: -87.6226
            },
            description: "Millennium Park is a public park in downtown Chicago."
        },

        {
            title: "Navy Pier",
            position: {
                lat: 41.8917,
                lng: -87.6078
            },
            description: "Navy Pier is a popular destination along Chicago's lakefront."
        }

    ];

    /* Feature 2: Information windows. */
    const infoWindow = new google.maps.InfoWindow();

    /* Feature 3: Multiple map markers. */
    locations.forEach(function (location) {

        const marker = new google.maps.Marker({

            position: location.position,
            map: map,
            title: location.title

        });

        marker.addListener("click", function () {

            infoWindow.setContent(
                "<div><h3>" + location.title +
                "</h3><p>" + location.description +
                "</p></div>"
            );

            infoWindow.open({
                anchor: marker,
                map: map
            });

        });

    });

};