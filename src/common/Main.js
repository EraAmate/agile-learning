import styled from '@emotion/styled';

export const Main = styled.div`
  font-size: 1.2rem;
  color: #f6f6f6;
  text-align: center;
  background-image: url(${(props) => props.theme.background});
  height: 100vh;
`;
