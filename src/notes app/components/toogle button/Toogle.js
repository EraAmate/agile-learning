import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';

const Button = styled(EmojiObjectsOutlinedIcon)`
  cursor: pointer;
  padding: 5px;
  margin: 10px;
  color: ${(props) => props.theme.colors.primary};
`;
function Toogle({ switchTheme }) {
  return <Button onClick={switchTheme}>SWITCH</Button>;
}
export default Toogle;

Toogle.propTypes = {
  switchTheme: PropTypes.func
};
