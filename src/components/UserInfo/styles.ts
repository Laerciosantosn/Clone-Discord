import styled from 'styled-components';

import { Mic, Headset, Settings } from 'styled-icons/material';

export const Container = styled.div`
  grid-area: UI;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;

  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.2);

  background-color: var(--quaternary);
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const UserData = styled.div``;

export const Icons = styled.div``;

export const MicIcon = styled(Mic)``;

export const HeadphoneIcon = styled(Headset)``;

export const SettingsIcon = styled(Settings)``;
