async function initMap() {
    const netherlands = { lat: 52.2, lng: 5.5 };
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: netherlands
    });

    getFiles().forEach(file => addToMap(map, file));
}

async function addToMap(map, file) {
    const xmlDoc = await fetchXml(file);
    const parser = new GPXParser(xmlDoc, map);

    parser.setTrackColour('#0289d1'); // Set the track line colour
    parser.addTrackpointsToMap(); // Add the trackpoints

    parser.segment.addListener('click', function() {
        parser.centerAndZoom(xmlDoc);
    });
    parser.segment.addListener('mouseover', function() {
        console.log({data: parser.segment})
    });
}

async function fetchXml(uri) {
    const data = await (await fetch(uri)).text();
    var domParser = new DOMParser();
    return domParser.parseFromString(data, 'application/xml');
}

function getFiles() {
    return [
        'gpx/103-hollandse-kade.gpx',
        'gpx/1083-rotterdam-maasstad.gpx',
        'gpx/1084-krickenbecker-seen.gpx',
        'gpx/1085-helderse-duinen.gpx',
        'gpx/1086-hart-van-het-groene-woud.gpx',
        'gpx/1087-gein-en-vecht.gpx',
        'gpx/109-ijsselvallei-dag-1.gpx',
        'gpx/110-ijsselvallei-dag-2.gpx',
        'gpx/111-kampina.gpx',
        'gpx/113-belmonte.gpx',
        'gpx/114-beukenburg.gpx',
        'gpx/115-elsterberg.gpx',
        'gpx/116-kennemerduinen.gpx',
        'gpx/117-landgoed-groeneveld.gpx',
        'gpx/118-lange-duinen.gpx',
        'gpx/119-meijendel.gpx',
        'gpx/120-meinweg-dag-1.gpx',
        'gpx/121-meinweg-dag-2.gpx',
        'gpx/122-mookerheide-dag-1.gpx',
        'gpx/123-mookerheide-dag-2.gpx',
        'gpx/124-noord-hollands-duinreservaat.gpx',
        'gpx/125-strabrechtse-heide.gpx',
        'gpx/126-utrechtse-heuvelrug.gpx',
        'gpx/127-veluwezoom.gpx',
        'gpx/128-vughtse-lunetten.gpx',
        'gpx/129-de-vuursche.gpx',
        'gpx/130-warnsborn.gpx',
        'gpx/131-amsterdam-via-westerborkpad.gpx',
        'gpx/132-vechtdal-dag-1.gpx',
        'gpx/133-vechtdal-dag-2.gpx',
        'gpx/657-woldberg-steenwijk.gpx',
        'gpx/658-wezepsche-heide-zwolle.gpx',
        'gpx/659-waterlinie-culemborg.gpx',
        'gpx/660-uiterwaarden-van-cortenoever.gpx',
        'gpx/661-schiedam-jeneverstad.gpx',
        'gpx/662-pietersberg-maastricht.gpx',
        'gpx/664-park-lingezegen.gpx',
        'gpx/665-overijsselse-buitenplaatsen.gpx',
        'gpx/666-mastbos-breda.gpx',
        'gpx/667-limburgs-plateau.gpx',
        'gpx/668-leeuwarden.gpx',
        'gpx/669-land-van-ravenstein.gpx',
        'gpx/670-hierdense-poort.gpx',
        'gpx/671-hemelse-berg-arnhem.gpx',
        'gpx/672-fort-de-roovere.gpx',
        'gpx/673-eiland-van-dordrecht.gpx',
        'gpx/674-drentsche-aa.gpx',
        'gpx/675-den-haag.gpx',
        'gpx/676-de-bretten.gpx',
        'gpx/677-blauwe-kamer-rhenen.gpx',
        'gpx/678-beerschoten-bilthoven.gpx',
        'gpx/99-heiligenbergerbeek.gpx'
    ];
}
