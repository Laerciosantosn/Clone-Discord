import styled from 'styled-components';

import { Hashtag } from 'styled-icons/heroicons-outline';
import { PersonAdd, Settings } from 'styled-icons/material';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  padding: 8px 0px;
  border-radius: 8px;

  background-color: transparent;
  transition: background-color 0.2s;

  > div {
    display: flex;
    align-items: center;
  }

  > div p {
    font-size: 16px;
    margin-left: 8px;
    color: var(--senary);
  }
  > span {
    visibility: hidden;
  }
  &:hover,
  &.active {
    background-color: var(--quinary);

    > div p {
      color: var(--white);
    }
    > span {
      visibility: visible;
    }
  }
`;

export const SettingsContainer = styled.div`
  /* svg {
    visibility: hidden;
  }
  &:hover {
    visibility: initial;
  } */
`;

export const HastagIcon = styled(Hashtag)`
  width: 20px;
  height: 20px;

  color: var(--symbol);
`;

export const InviteIcon = styled(PersonAdd)`
  width: 20px;
  height: 20px;

  color: var(--symbol);

  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }
`;

export const SettingsIcon = styled(Settings)`
  width: 20px;
  height: 20px;
  margin-left: 4px;

  color: var(--symbol);

  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }
`;
