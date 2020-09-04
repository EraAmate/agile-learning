import React from 'react';
import { Main } from '../../common/Main';
import { MenuButton } from '../components/MenuButton';
import { MenuWrapper } from '../components/MenuWrapper';

export default function Menu() {
  let buttons = [
    { name: 'Countdown Timer', direction: '/timer' },
    { name: 'Notes App', direction: '/notes' }
  ];
  return (
    <Main>
      <h3>Chooose your task</h3>
      <MenuWrapper>
        {buttons.map((button, i) => {
          return (
            <MenuButton
              key={i}
              name={button.name}
              direction={button.direction}
            />
          );
        })}
      </MenuWrapper>
    </Main>
  );
}
