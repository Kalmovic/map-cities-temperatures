import React, { useState } from "react";
import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import mapPinIcon from "../../utils/mapPinIcon";
import "leaflet/dist/leaflet.css";
import { api } from "../../services/api";
import DetailsModal from "../../components/DetailsModal";
import Aside from "../../components/Aside";
import { Wrapper } from "./styles";

function Home() {
  const [position, setPosition] = useState([-22.9677586, -43.2158251]);
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState({});
  const [isDetailsModal, setDetailsModalOpen] = useState(false);

  function handleOpenDetailsModal(city) {
    setSelectedCity({
      ...selectedCity,
      name: city.name,
      temp_max: city.main.temp_max,
      temp_min: city.main.temp_min,
    });
    setDetailsModalOpen(true);
  }

  function handleCloseDetailsModal() {
    setDetailsModalOpen(false);
  }

  const handleSearchCities = async () => {
    const reponse = await api
      .get(
        `find?lat=${position[0]}&lon=${position[1]}&cnt=15&APPID=${process.env.REACT_APP_API_KEY}`
      )
      .then((result) => result);
    const cityList = reponse.data.list;
    setCities(cityList);
  };

  const LocationMarker = () => {
    useMapEvents({
      click(e) {
        setPosition([e.latlng.lat, e.latlng.lng]);
      },
    });

    return <Marker position={position} interactive={false} icon={mapPinIcon} />;
  };

  return (
    <Wrapper>
      <Aside
        handleSearchCities={handleSearchCities}
        cities={cities}
        handleOpenDetailsModal={handleOpenDetailsModal}
      />
      <MapContainer
        center={position}
        zoom={13}
        style={{ width: "100%", height: "100%" }}
      >
        <LocationMarker />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png"
        />
      </MapContainer>

      <DetailsModal
        onRequestClose={handleCloseDetailsModal}
        isOpen={isDetailsModal}
        cityDetails={selectedCity}
      />
    </Wrapper>
  );
}

export default Home;
