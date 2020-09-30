import styled from '@emotion/styled';
import grey from './assets/grey.jpg';

export const Main = styled.div`
  height: 100vh;
  width: 100wh;
  padding: 40px 100px;
  font-size: 2rem;
  color: white;
  text-align: center;
  background-image: url(${grey});
  object-fit: cover;
`;
