import styled from '@emotion/styled';

export const ModalWrapper = styled.div`
  position: fixed;
  left: 50%;
  top: 20%;
  border-radius: 8px;
  min-width: 400px;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  padding: 10px;

  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 1rem;
  }

  button {
    cursor: pointer;
    padding: 7px 10px;
    font-size: 1rem;
    border-radius: 8px;
    margin-left: 15px;
    color: ${(props) => props.color};
    border: 1px solid ${(props) => props.brColor};
    background: ${(props) => props.bgColor};
  }

  input {
    outline: none;
    font-size: 1rem;
    padding: 8px 10px;
    height: ${(props) => props.height};
    text-align: top;
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme.colors.dividingLine};
    margin-bottom: 15px;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 7px 10px;
  font-size: 1rem;
  border-radius: 8px;
  margin-left: 15px;
  color: ${(props) => props.color};
  border: 1px solid ${(props) => props.brColor};
  background: ${(props) => props.bgColor};
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid ${(props) => props.theme.colors.dividingLine};
  margin-bottom: 20px;
  padding-bottom: 1rem;
  font-size: 1.2rem;
`;

export const ModalFooter = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top: 1rem;
  border-top: 1px solid ${(props) => props.theme.colors.dividingLine};
`;
