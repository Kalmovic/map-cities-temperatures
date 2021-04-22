import React, { memo } from "react";
import { AsideWrapper, Button, Disclaimer, Item, List } from "./styles";

function Aside({ handleSearchCities, cities, handleOpenDetailsModal }) {
  return (
    <AsideWrapper>
      <Disclaimer>Search for cities based on your pin!</Disclaimer>
      <Button onClick={handleSearchCities}>Search</Button>

      <List>
        {cities.map((item, index) => {
          return (
            <Item onClick={() => handleOpenDetailsModal(item)} key={index}>
              {item.name}
            </Item>
          );
        })}
      </List>
    </AsideWrapper>
  );
}

export default memo(Aside);
