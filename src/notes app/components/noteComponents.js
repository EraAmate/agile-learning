import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 50px;
  padding: 15px;
  font-size: 0.8rem;
  grid-auto-flow: row;
`;

export const Column = styled.div`
  padding: 10px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-flow: column;
`;

export const Note = styled.div`
  padding: 15px 20px 15px 0;
  margin: 10px;
  border-radius: 10px;
  background: rgba(0.5, 0.5, 0.5, 0.5);
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(0.5, 0.5, 0.5, 0.5);
  margin: 30px;
  width: 300px;
  font-size: 1.2rem;
`;

export const TitleField = styled.input`
  padding: 15px 10px 0;
  background: transparent;
  font-size: 1.2rem;
  border: none;
  border-top: 1px solid #f6f6f6;
  outline: none;
  color: #f6f6f6;
`;

export const NoteBodyField = styled.input`
  padding: 0 10px;
  border: none;
  background: transparent;
  outline: none;
  color: #f6f6f6;
  height: 100px;
`;

export const Button = styled.button`
  padding: 5px;
  margin: 15px 5px 0 0;
  color: white;
  border: 1px solid ${(props) => props.color};
  background: none;
  border-radius: 6px;

  &:hover {
    background: ${(props) => props.background};
  }
`;

export const ColorBorder = styled.div`
  border-left: 4px solid ${(props) => props.color};
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const NoteTitle = styled.p`
  margin: 0;
  padding: 0;
  font-size: 25px;
`;

export const Data = styled.p`
  margin: 0;
  padding: 0;
  margin: 5px 0 10px 0;
`;

export const Paragraph = styled.p`
  margin: 0;
  padding: 0;
  text-align: left;
  margin-bottom: 10px;
`;

export const ColumnTitle = styled.h2`
  font-size: 30px;
  text-align: left;
  @media (max-width: 500px) {
    text-align: center;
  }
`;

export const AddButton = styled.button`
  padding: 10px;
  font-size: 0.9rem;
  cursor: pointer;
  outline: none;
  background: none;
  border: none;
  color: #f6f6f6;
  width: 50%;

  &:hover {
    background: grey;
    color: yellow;
  }
`;
