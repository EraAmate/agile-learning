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
  justify-content: center;
  margin: 30px;
`;

export const ColorBorder = styled.div`
  border-left: 4px solid pink;
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
