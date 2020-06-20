import React from 'react';

import { Container, HastagIcon, InviteIcon, SettingsIcon } from './styles';

export interface Props {
  channelName: string;
  selected?: boolean;
}

const ChannelButton: React.FC<Props> = ({ channelName, selected }) => {
  return (
    <Container className={selected ? 'active' : ''}>
      <div>
        <HastagIcon />
        <p>{channelName}</p>
      </div>
      <span>
        <InviteIcon />
        <SettingsIcon />
      </span>
    </Container>
  );
};

export default ChannelButton;
