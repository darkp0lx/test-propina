import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { extractNumber } from '../helpers/Severals';

const types = ['5%', '10%', '15%', '25%', '50%'];

export const GroupButtons = ({ setFormInputs }) => {
  const [active, setActive] = useState(types[0]);

  useEffect(() => {
    setFormInputs(e => ({ ...e, discount: extractNumber(active) }))
  }, [active]);

  return (
    <ButtonGroup>
      {types.map(type => (
        <ButtonToggle
          key={type}
          active={active === type}
          onClick={() => setActive(type)}
        >
          {type}
        </ButtonToggle>
      ))}
    </ButtonGroup>
  );
}
const Button = styled.button`
  /* Same as above */
`;
const ButtonToggle = styled(Button)`
  width:25%;
  height:50px;
  background:#417D7A;
  color:white;
  border:none;
  border-radius:5px;
  font-size:1.2em;
  font-weight:bold;
  ${({ active }) =>
    active &&
    `
    background:#1D5C63;
    transform:scale(1.1);
    opacity: 1;
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content:justify-content: center;
  gap:10px;
  flex-wrap:wrap;
`;

