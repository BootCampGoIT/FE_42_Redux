import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  border: 1px solid cornflowerblue;
  border-radius: 14px;
  padding: 10px;

  .formLabel {
    margin-right: 10px;
  }

  .formInput {
    margin: 0 10px;
    border-radius: 14px;
    border: 1px solid cornflowerblue;
    height: 20px;
  }

  .formButton {
    background-color: cornflowerblue;
    border: none;
    border-radius: 14px;
    padding: 0 15px;
    height: 28px;
    color: white;
    text-transform: uppercase;
  }
`;
