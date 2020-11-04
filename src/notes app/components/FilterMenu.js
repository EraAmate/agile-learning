import React from 'react';
import styled from '@emotion/styled';

export const Wrapper = styled.header`
  padding: 30px 10px;
  font-size: 1.1rem;
  color: #f6f6f6;
  background: rgba(0.5, 0.5, 0.5, 0.5);
  max-width: 250px;
`;
const List = styled.ul`
  list-style: none;
  padding-left: 15px;
`;
const Variation = styled.li`
  margin-bottom: 10px;
  cursor: pointer;
  padding: 5px;

  &:after {
    display: block;
    content: '';
    border-bottom: 3px solid #2196f3;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
    transform-origin: 0% 50%;
  }

  &:hover:after {
    transform: scaleX(1);
  }
`;
export function FilterMenu() {
  let filters = [
    { filter: 'All notes' },
    { filter: 'Important' },
    { filter: 'Family' },
    { filter: 'Education' },
    { filter: 'Health' },
    { filter: 'Office' },
    { filter: 'Privat' }
  ];

  return (
    <Wrapper>
      <List>
        {filters.map((filter) => {
          return <Variation key={filter.filter}>{filter.filter}</Variation>;
        })}
      </List>
    </Wrapper>
  );
}