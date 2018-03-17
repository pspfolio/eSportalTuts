import React, { Component } from 'react';
import styled from 'styled-components';

const Chips = styled.div`
  margin-top: 20px;
`;

const Chip = styled.div`
  border-radius: 16px;
  padding: 5px 15px;
  background-color: ${props => (props.title === 'hots' ? '#5f4488' : '#ff7800')};
  font-size: 0.8rem;
  display: inline;
  margin-right: 10px;
  color: white;
`;

const ChipsList = ({ tags, group }) => (
  <Chips>
    {tags &&
      tags.map(tag => (
        <Chip key={tag} title={group}>
          {tag}
        </Chip>
      ))}
  </Chips>
);

export default ChipsList;
