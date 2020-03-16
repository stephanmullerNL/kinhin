async function initMap() {
    const netherlands = { lat: 52.208, lng: 5.525 };
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: netherlands
    });

    const data = await (await fetch('gpx/129-de-vuursche.gpx')).text();
    console.log({ data });

    var domParser = new DOMParser();
    // Use it to turn your xmlString into an XMLDocument
    var xmlDoc = domParser.parseFromString(data, 'application/xml');

    const parser = new GPXParser(xmlDoc, map);
    window.parser = parser;

    parser.setTrackColour('#0289d1'); // Set the track line colour
    // parser.setTrackWidth(5); // Set the track line width
    // parser.setMinTrackPointDelta(0.001); // Set the minimum distance between track points
    parser.addTrackpointsToMap(); // Add the trackpoints
    console.log(parser.route, parser.segment);

    parser.segment.addListener('click', function() {
        parser.centerAndZoom(xmlDoc);
    });
}
