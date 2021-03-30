import styled from "styled-components";

export const NavigationContainer = styled.nav`
  .navigationList {
    list-style: none;
    display: flex;
}

.navigationListItem:not(:last-child) {
    margin-right: 20px;
}

  .navigationLink {
    text-decoration: none;
    text-transform: uppercase;
    padding: 20px 0;
  }

  .activeNavigationLink {
    color: red;
  }
`;
