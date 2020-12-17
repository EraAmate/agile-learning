import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';

import Logo from '../../../common/assets/Logo.svg';
import { AddBtn, Search, Wrapper } from './headerComponents';
import Toogle from '../toogle button/Toogle';

export function Header({ onClick, text, inputOnChange, value, toggleTheme }) {
  return (
    <Wrapper>
      <img src={Logo} />
      <p>{text}</p>
      <div>
        <input type="text" placeholder="Search here for notes..." onChange={inputOnChange} value={value} />
        <Search />
        <Toogle switchTheme={toggleTheme} />
        <Tooltip title="Create new note" aria-label="add">
          <AddBtn onClick={onClick} />
        </Tooltip>
      </div>
    </Wrapper>
  );
}

Header.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  inputOnChange: PropTypes.func,
  value: PropTypes.string,
  toggleTheme: PropTypes.func
};
