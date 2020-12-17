import styled from '@emotion/styled';

import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';

export const Wrapper = styled.header`
  display: flex;
  padding: 10px 30px;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.primary};
  background: ${(props) => props.theme.colors.filterMenu};
  align-items: center;

  img {
    width: 40px;
    height: 40px;
    margin-right: 15px;
  }

  p {
    padding: 0;
    margin: 0;
    margin-right: 3%;
  }

  input {
    padding: 10px 10px 10px 35px;
    font-size: 1rem;
    border-radius: 8px;
    border: none;
    outline: none;
    width: 100%;
    opacity: 0.8;
  }

  div {
    position: absolute;
    display: flex;
    align-items: center;
    width: 350px;
    padding: 0 10px;
    right: 0;
    margin-right: 25px;
  }
`;

export const Search = styled(SearchIcon)`
  text-align: left;
  position: absolute;
  align-self: center;
  margin-left: 10px;
  color: #2d2d2d;
  margin-right: 25px;
`;

export const AddBtn = styled(AddIcon)`
  background: ${(props) => props.theme.colors.btnSecondary};
  border-radius: 50%;
  padding: 7px;
  cursor: pointer;
  right: 0;
`;
