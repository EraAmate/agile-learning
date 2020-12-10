import React from 'react';
import styled from '@emotion/styled';

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
      <ul>
        {filters.map((filter) => {
          return <li key={filter.filter}>{filter.filter}</li>;
        })}
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 30px 10px;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.primary};
  background: rgba(0.5, 0.5, 0.5, 0.5);

  ul {
    list-style: none;
    padding-left: 15px;
    text-align: left;
  }

  li {
    margin-bottom: 10px;
    cursor: pointer;
    padding: 5px;

    &:after {
      display: block;
      content: '';
      border-bottom: 3px solid ${(props) => props.theme.colors.btnSecondary};
      transform: scaleX(0);
      transition: transform 250ms ease-in-out;
      transform-origin: 0% 50%;
    }

    &:hover:after {
      transform: scaleX(1);
    }
  }
`;
