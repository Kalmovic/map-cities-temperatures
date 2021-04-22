import styled from "styled-components";
import { rem } from "../../utils/tools";

export const AsideWrapper = styled.aside`
  display: flex;
  width: ${rem(250)};
  background: white;
  padding: ${rem(10)};
  flex-direction: column;
  align-items: center;
`;
export const Button = styled.button`
  border: ${rem(1)} solid var(--black);
  box-sizing: border-box;
  border-radius: ${rem(8)};
  padding: ${rem(8)} ${rem(72)};
  background: var(--blue-light); /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    var(--blue),
    var(--blue-light)
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    var(--blue),
    var(--blue-light)
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: white;
`;
export const Disclaimer = styled.h2`
  color: var(--text-color);
  text-align: left;
  font-size: ${rem(20)};
  margin-bottom: ${rem(8)};
`;

export const List = styled.ul`
  list-style-type: none;
`;

export const Item = styled.li`
  margin: ${rem(10)} 0 ${rem(10)} 0;
  padding: ${rem(5)};
  border: ${rem(1)} solid gray;
  cursor: pointer;
  text-align: center;
  min-width: ${rem(180)};
  color: var(--text-color);
`;
