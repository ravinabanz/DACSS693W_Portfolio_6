//Initializing the map object
let map;

async function initMap() {
  //--------Marker Locations---------
  //Location of UMass-Amherst
  const umassAmherst = {
    lat: 42.3868,
    lng: -72.5301
  };
  //Location of Puffton Vlg
  const pufftonVlg = {
    lat: 42.406627881435824,
    lng: -72.53097701560198
  };
  //Location of Boulders
  const bouldersApts = {
    lat: 42.35390959496779,
    lng: -72.52719039995692
  };
  //Location of Brandywine
  const brandywineApts = {
    lat: 42.407547836548254,
    lng: -72.53647540931473
  };
  //Location of Crestview
  const crestviewApts = {
    lat: 42.403945410001675,
    lng: -72.5276475593898
  };
  //Location of Presidential
  const presidentialApts = {
    lat: 42.40249709107611,
    lng: -72.53077267473205
  };
  //Location of Cliffside
  const cliffsideApts = {
    lat: 42.453679871119576,
    lng: -72.56389085671391
  };
  //Location of Sugarloaf
  const sugarloafApts = {
    lat: 42.45827767201898,
    lng: -72.5824124045875
  };
  //----End of Locations--------

  //Requesting Libraries
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  //Creating Map
  map = new Map(document.getElementById("map"), {
    zoom: 12,
    center: umassAmherst,
    mapId: "map_1"
  });

  //-----------Start of Markers-----------------------
  // positioned at Umass Amherst
  const umassMarker = new AdvancedMarkerElement({
    map: map,
    position: umassAmherst,
    title: "UMass, Amherst"
  });
  //Puffton
  const pufftonMarker = new AdvancedMarkerElement({
    map: map,
    position: pufftonVlg,
    title: "Puffton Vlg Apts"
  });
  //Brandywine
  const brandywineMarker = new AdvancedMarkerElement({
    map: map,
    position: brandywineApts,
    title: "Brandywine Apts"
  });
  //Crestview
  const crestviewMarker = new AdvancedMarkerElement({
    map: map,
    position: crestviewApts,
    title: "Crestview Apts"
  });
  //Presidential
  const presidentialMarker = new AdvancedMarkerElement({
    map: map,
    position: presidentialApts,
    title: "Presidential Apts"
  });
  //Boulders
  const bouldersMarker = new AdvancedMarkerElement({
    map: map,
    position: bouldersApts,
    title: "Boulders Apts"
  });
  //Cliffside
  const cliffsideMarker = new AdvancedMarkerElement({
    map: map,
    position: cliffsideApts,
    title: "Cliffside Apts"
  });
  //Sugarloaf
  const sugarloafMarker = new AdvancedMarkerElement({
    map: map,
    position: sugarloafApts,
    title: "Sugarloaf Apts"
  });
  //-----------End of Markers------------------------

  //Displaying Tile
  // Create an info window
  /*
  var infoWindow = new google.maps.InfoWindow({
    content: 'Your Marker Title'
  });

  // Open info window when marker is clicked
  marker.addListener('click', function() {
    infoWindow.open(map, marker);
  });*/
}

initMap();
