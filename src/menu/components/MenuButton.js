import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Button = styled(Link)`
  text-decoration: none;
  border: 2px solid white;
  background-color: transparent;
  color: white;
  width: 300px;
  padding-top: 20px;
  margin: 20px 0;
  height: 50px;
  font-size: 1.4rem;
  &:hover {
    opacity: 0.8;
    border: 2px solid #51b6d4;
    font-size: 1.6rem;
  }
`;

export const MenuButton = ({ name, direction }) => (
  <Button to={direction}>{name}</Button>
);

MenuButton.propTypes = {
  direction: PropTypes.string,
  name: PropTypes.string
};
