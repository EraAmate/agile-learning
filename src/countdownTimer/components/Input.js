import styled from '@emotion/styled';

export const InputsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 50px 0 20px;
`;

export const TextInput = styled.input`
  outline: none;
  padding: 10px;
  width: 100%;
  font-size: 1rem;
  border: none;
  border-radius: 7px 0 0 7px;
`;

export const DateInput = styled.input`
  border: none;
  outline: none;
  padding: 0 5px 0 5px;
  border-radius: 0 7px 7px 0;
  font-size: 1rem;
  width: 40%;
  border-left: 1px solid black;
`;

export const Div = styled.div`
  display: flex;
  min-width: 700px;
`;
