import styled from "styled-components";

export const AppContainer = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  /* fallback for old browsers */
  background: #7f7fd5;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4);

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4);
`;
