import styled from 'styled-components';

import { ExpandMore } from 'styled-icons/material';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  justify-content: space-between;

  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.2);
  z-index: 2;

  background-color: var(--secondary);
`;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;
`;

export const ExpandIcon = styled(ExpandMore)`
  width: 20px;
  height: 20px;

  cursor: pointer;
`;
