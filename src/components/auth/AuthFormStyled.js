import styled from "styled-components";

export const AuthContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;

  .formLabel {
    width: 300px;
  }

  .formInput {
    margin: 0;
    border-radius: 14px;
    border: 1px solid cornflowerblue;
    height: 20px;
    outline: none;
    width: 100%;
    display: block;
  }

  .formButton {
    display: block;
    background-color: cornflowerblue;
    border: none;
    border-radius: 14px;
    padding: 0 15px;
    height: 28px;
    color: white;
    text-transform: uppercase;
    width: 100%;
  }
`;
