import styled from '@emotion/styled';

export const Note = styled.div`
  padding: 15px 20px 15px 0;
  margin: 10px;
  text-align: left;
  border-radius: 10px;
  color: ${(props) => props.theme.colors.primary};
  background: ${(props) => props.theme.colors.filterMenu};
  cursor: pointer;

  &:hover {
    box-shadow: 1px 1px 1px white;
  }
`;

export const Body = styled.div`
  color: #f6f6f6;
  display: grid;
  padding-right: 40px;
  grid-template-columns: 20% 80%;
`;

export const RightSide = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  padding: 15px;
  font-size: 0.8rem;
  grid-auto-flow: row;
  column-gap: 5%;
  color: ${(props) => props.theme.colors.primary};
`;

export const Column = styled.div`
  padding: 10px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-flow: column;
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
  outline: none;
  color: ${(props) => props.theme.colors.primary};
`;

export const NoteBodyField = styled.input`
  padding: 0 10px;
  border: none;
  background: transparent;
  outline: none;
  color: ${(props) => props.theme.colors.primary};
  height: 100px;
`;

export const ColorBorder = styled.div`
  border-left: 4px solid ${(props) => props.theme.colors.notePrimary};
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const NoteTitle = styled.p`
  margin: 0;
  padding: 0;
  font-size: 1.3rem;
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
  font-size: 1.4rem;
  margin-left: 10px;
  text-align: left;
  @media (max-width: 500px) {
    text-align: center;
  }
`;
