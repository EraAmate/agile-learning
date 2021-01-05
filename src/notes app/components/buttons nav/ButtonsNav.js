import React from 'react';
import PropTypes from 'prop-types';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import styled from '@emotion/styled';

export const ButtonsNav = ({ handleDelete }) => {
  return (
    <Wrapper>
      <div>
        <DeleteIcon color="error" onClick={handleDelete} />
      </div>
      <div>
        <EditIcon />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;

  div {
    cursor: pointer;
    margin: 0 4px;

    :hover {
      border: 1px solid white;
      border-radius: 5px;
      opacity: 0.8;
    }
  }
`;

ButtonsNav.propTypes = {
  handleDelete: PropTypes.func
};
