import styled from "styled-components";

export const AsideWrapper = styled.aside`
  display: flex;
  width: 250px;
  background: white;
  padding: 10px;
  flex-direction: column;
  align-items: center;
`;
export const Button = styled.button`
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 8px 72px;
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
  font-size: 20px;
  margin-bottom: 8px;
`;

export const List = styled.ul`
  list-style-type: none;
`;

export const Item = styled.li`
  margin: 10px 0 10px 0;
  padding: 5px 30px 5px 30px;
  border: 1px solid gray;
  cursor: pointer;
`;
