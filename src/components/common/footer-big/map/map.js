import {mediaQueryTablet} from 'Utils/variables';
import {mediaQueryMobile} from 'Utils/variables';

let mapPosition = { lat: 59.9393, lng: 30.315 };
let iconSize = new google.maps.Size(113, 106);
let zoomIndex = 16;

const mapContainer = document.getElementById("map");
const coordinates = { lat: 59.93881322009013, lng: 30.32305812754065 };


window.initMap = initMap;
initMap();


function resizeElements() {
  if (mediaQueryTablet.matches) {
    mapPosition = coordinates;
    zoomIndex = 15;
  }

  if (mediaQueryMobile.matches) {
    iconSize = new google.maps.Size(57, 53);
    zoomIndex = 16;
  }
}


function initMap() {

  resizeElements();

  const markerImage = {
    url: 'assets/images/map-marker.png',
    scaledSize: iconSize,
  };

  const map = new google.maps.Map(mapContainer, {
    zoom: zoomIndex,
    center: mapPosition,
  });

  const marker = new google.maps.Marker({
    position: coordinates,
    map: map,
    icon: markerImage,
  });
}
