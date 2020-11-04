import AddIcon from '@material-ui/icons/Add';
import styled from '@emotion/styled';

export const Wrapper = styled.header`
  display: flex;
  padding: 10px 30px;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.primary};
  background: rgba(0.5, 0.5, 0.5, 0.5);
  align-items: center;
`;
export const Name = styled.p`
  padding: 0;
  margin: 0;
  margin-right: 10%;
`;
export const Img = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 15px;
`;
export const SearchInput = styled.input`
  width: 60%;
  padding: 10px;
  font-size: 1rem;
  border-radius: 8px;
  opacity: 0.6;
  max-width: 200px;
  display: block;
  outline: none;

  &:hover {
    max-width: 350px;
    transition: 1s;
  }
`;
export const AddBtn = styled(AddIcon)`
  background: ${(props) => props.theme.colors.btnSecondary};
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  margin-left: auto;
`;
