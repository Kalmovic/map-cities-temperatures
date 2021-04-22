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
  border: ${rem(1)} solid #000000;
  box-sizing: border-box;
  border-radius: ${rem(8)};
  padding: ${rem(8)} ${rem(72)};
  background: #56ccf2; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #2f80ed,
    #56ccf2
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #2f80ed,
    #56ccf2
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: white;
`;
export const Disclaimer = styled.h2`
  text-align: left;
  font-size: ${rem(20)};
  margin-bottom: ${rem(8)};
`;

export const List = styled.ul`
  list-style-type: none;
`;

export const Item = styled.li`
  margin: ${rem(10)} 0 ${rem(10)} 0;
  padding: ${rem(5)} ${rem(30)} ${rem(5)} ${rem(30)};
  border: ${rem(1)} solid gray;
  cursor: pointer;
`;
