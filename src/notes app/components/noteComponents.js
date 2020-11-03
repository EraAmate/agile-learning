import styled from '@emotion/styled';

export const Body = styled.div`
  color: #f6f6f6;
  height: 100vh;
  display: grid;
  grid-template-columns: 30% 70%;
`;
export const RightSide = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 10%;
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
  width: 300px;
  font-size: 1.2rem;
  margin-left: auto;
  margin-right: auto;
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
  padding: 8px 12px;
  margin: 15px 5px 0 0;
  color: white;
  border: 1px solid ${(props) => props.color};
  background: none;
  border-radius: 6px;

  &:hover {
    background: #4c4c4c;
    border: none;
    color: ${(props) => props.color};
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
  font-size: 1.5rem;
  margin-left: 10px;
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
