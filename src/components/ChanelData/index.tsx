import React from 'react';

import { Container } from './styles';

const ChanelData: React.FC = () => {
  return (
    <Container>
      <Messages />
      <InputWrapper>
        <Input>
          <InputIcon />
        </Input>
      </InputWrapper>
    </Container>
  );
};

export default ChanelData;
