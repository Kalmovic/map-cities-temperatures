import styled from "styled-components";
import { rem } from "../../utils/tools";

export const CityName = styled.h2`
  text-align: center;
  font-size: ${rem(20)};
  color: var(--text-color);
`;
export const AllTempInfoWrapper = styled.section`
  display: flex;
  justify-content: space-around;
`;
export const TempWrapper = styled.section`
  margin: ${rem(20)} 0 ${rem(20)} 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Temp = styled.h1`
  font-size: ${rem(45)};
  text-align: center;
  margin-bottom: ${rem(10)};
  color: var(--text-color);
`;

export const TypeOfTemp = styled.h3`
  font-size: ${rem(16)};
  text-align: center;
  color: var(--text-color);
`;
