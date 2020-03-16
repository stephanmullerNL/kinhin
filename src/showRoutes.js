async function initMap() {
    const netherlands = { lat: 52.2, lng: 5.5 };
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: netherlands
    });

    const xmlDoc = await fetchXml('gpx/129-de-vuursche.gpx');
    const parser = new GPXParser(xmlDoc, map);

    parser.setTrackColour('#0289d1'); // Set the track line colour
    parser.addTrackpointsToMap(); // Add the trackpoints

    parser.segment.addListener('click', function() {
        parser.centerAndZoom(xmlDoc);
    });
}

async function fetchXml(uri) {
    const data = await (await fetch(uri)).text();
    var domParser = new DOMParser();
    return domParser.parseFromString(data, 'application/xml');
}
