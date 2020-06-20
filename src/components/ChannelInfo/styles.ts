import styled from 'styled-components';

import { Hashtag } from 'styled-icons/heroicons-outline';

export const Container = styled.div`
  grid-area: CI;
  display: flex;
  align-items: center;
  padding: 12px 16px;
  /* justify-content: space-between; */
  background-color: var(--primary);

  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.2);
  z-index: 2;

  background-color: var(--secondary);
`;

export const HashtagIcon = styled(Hashtag)`
  width: 20px;
  height: 20px;
  color: var(--symbol);
  cursor: pointer;
`;

export const Title = styled.h1`
  margin-left: 8px;

  font-size: 16px;
  font-weight: bold;
`;

export const Separator = styled.div`
  height: 24px;
  width: 1px;

  background-color: var(--white);
  opacity: 0.2;
  margin: 0 13px;
`;

export const Description = styled.span`
  font-size: 15px;
  color: var(--gray);
`;
