import React, { memo } from "react";
import ReactModal from "react-modal";
import closeImg from "../../assets/close.svg";
import { toCelsius } from "../../utils/convertTemperature";
import {
  AllTempInfoWrapper,
  CityName,
  TypeOfTemp,
  Temp,
  TempWrapper,
} from "./styles";

function DetailsModal({ isOpen, onRequestClose, cityDetails }) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      appElement={document.getElementById("root")}
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Close modal" height={12} width={12} />
      </button>
      <CityName>{cityDetails.name}</CityName>
      <AllTempInfoWrapper>
        <TempWrapper>
          <Temp>{toCelsius(cityDetails.temp_min)}º C</Temp>
          <TypeOfTemp>Minimum temperature</TypeOfTemp>
        </TempWrapper>
        <TempWrapper>
          <Temp>{toCelsius(cityDetails.temp_max)}º C</Temp>
          <TypeOfTemp>Maximum temperature</TypeOfTemp>
        </TempWrapper>
      </AllTempInfoWrapper>
    </ReactModal>
  );
}

export default memo(DetailsModal);
