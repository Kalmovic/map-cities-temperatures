import Leaflet from "leaflet";
import mapPin from "../assets/pin.svg";

const mapPinIcon = Leaflet.icon({
  iconUrl: mapPin,
  iconSize: [30, 30],
  iconAnchor: [20, 40],
});

export default mapPinIcon;
