/*
    Assignment #4
    Chantal Monette W0800871
*/

$(function () {
    let locationhere = document.getElementById("locationhere");
    let header = document.getElementsByTagName("header");

    // looking for previous location information
    let prevlat = localStorage.getItem("lat");
    let prevlong = localStorage.getItem("long");
    if (prevlat) {
        locationhere.innerHTML = 
            "<h1>Welcome Back!</h1> You were last at: <br /> Latitude: " + prevlat + "<br /> Longitude: " + prevlong; 
    } else {
        locationhere.innerHTML = 
            "Welcome!"
    }

    // the geolocation api thing
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(newLocation, () => {
            console.log("Location services not available.");
        });
    } else {
        locationhere.innerHTML = "Geolocation isn't available here, sorry!"
    }

    // this is the function the geolocator is calling. 
    // theoretically it grabs the info
    // then saves it into local storage if none exists
    // then displays the new info
    function newLocation(position) {
        let currentlat = position.coords.latitude;
        let currentlong = position.coords.longitude;

        localStorage.setItem('lat', currentlat);
        localStorage.setItem('long', currentlong);

        let p = document.createElement('p');
        locationhere.appendChild(p);

        p.innerHTML = 
        "<div id='newlocation'>Your current location is: <br /> Latitude: " + currentlat + "<br /> Longitude: " + currentlong + "</div>"
    }






    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    }
});


