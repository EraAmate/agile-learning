import React from 'react';
import styled from '@emotion/styled';
import Logo from '../../common/assets/Logo.svg';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';

export function Header({ onClick, text }) {
  return (
    <Wrapper>
      <Img src={Logo} />
      <Name>{text}</Name>
      <SearchInput placeholder="Search here for notes..." />
      <Tooltip title="Create new note" aria-label="add">
        <AddBtn onClick={onClick} />
      </Tooltip>
    </Wrapper>
  );
}

Header.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
};

// Components

const Wrapper = styled.header`
  display: flex;
  padding: 10px 30px;
  font-size: 1.5rem;
  color: #f6f6f6;
  background: rgba(0.5, 0.5, 0.5, 0.5);
  align-items: center;
`;
const Name = styled.p`
  padding: 0;
  margin: 0;
  margin-right: 10%;
`;
const Img = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 15px;
`;
const SearchInput = styled.input`
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
const AddBtn = styled(AddIcon)`
  background: #2196f3;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  margin-left: auto;
`;
