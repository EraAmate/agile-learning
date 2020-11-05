import React from 'react';
import Logo from '../../common/assets/Logo.svg';
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';
import { Wrapper, Img, Name, SearchInput, AddBtn, Search, Inputfield } from './headerComponents';

export function Header({ onClick, text }) {
  return (
    <Wrapper>
      <Img src={Logo} />
      <Name>{text}</Name>
      <Inputfield>
        <SearchInput placeholder="Search here for notes..." />
        <Search />
      </Inputfield>
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
