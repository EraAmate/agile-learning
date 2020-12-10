import styled from '@emotion/styled';

import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';

export const Wrapper = styled.header`
  display: flex;
  padding: 10px 30px;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.primary};
  background: rgba(0.5, 0.5, 0.5, 0.5);
  align-items: center;

  img {
    width: 40px;
    height: 40px;
    margin-right: 15px;
  }

  p {
    padding: 0;
    margin: 0;
    margin-right: 10%;
  }

  input {
    padding: 10px 10px 10px 35px;
    font-size: 1rem;
    border-radius: 8px;
    outline: none;
    width: 100%;
  }

  div {
    position: absolute;
    display: flex;
    align-items: center;
    width: 250px;
    padding: 0 10px;
    right: 0;
    margin-right: 90px;
    opacity: 0.6;
  }
`;

export const Search = styled(SearchIcon)`
  text-align: left;
  position: absolute;
  align-self: center;
  margin-left: 10px;
  opacity: 0.6;
  color: ${(props) => props.theme.colors.secondary};
`;

export const AddBtn = styled(AddIcon)`
  background: ${(props) => props.theme.colors.btnSecondary};
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  margin-left: auto;
`;
