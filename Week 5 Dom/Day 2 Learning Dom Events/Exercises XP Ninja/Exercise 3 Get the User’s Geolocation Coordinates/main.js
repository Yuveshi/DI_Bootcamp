document.getElementById("getLocation").onclick = function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        document.getElementById("output").textContent = "Geolocation is not supported by this browser.";
    }
};

function showPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    document.getElementById("output").textContent = `Latitude: ${latitude}\nLongitude: ${longitude}`;
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById("output").textContent = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById("output").textContent = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            document.getElementById("output").textContent = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById("output").textContent = "An unknown error occurred.";
            break;
    }
}
