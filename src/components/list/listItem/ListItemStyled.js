import styled from "styled-components";

export const ListItemContainer = styled.li`
  width: 150px;
  height: 200px;
  border: 1px solid cornflowerblue;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .deleteButton {
    background-color: cornflowerblue;
    border: none;
    border-radius: 14px;
    padding: 0 15px;
    height: 28px;
    color: white;
    text-transform: uppercase;
  }
`;
