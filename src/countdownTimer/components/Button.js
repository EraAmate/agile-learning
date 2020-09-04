import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Button = styled.button`
  background: #51b6d4;
  outline: none;
  color: white;
  cursor: pointer;
  border: none;
  font-size: 1.1rem;
  margin-left: 30px;
  padding: 10px 30px 10px 30px;
  border-radius: 7px;
`;

const StartButton = ({ onClick, name }) => {
  return <Button onClick={onClick}>{name}</Button>;
};

StartButton.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string
};

export default StartButton;
