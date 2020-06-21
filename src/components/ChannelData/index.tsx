import React, { useRef, useEffect } from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

import ChannelMessage, { Mention } from '../ChannelMessage';

const ChanelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map(() => (
          <ChannelMessage
            author="Usuário 01"
            date="20/06/2020"
            content="HOje é sabado"
          />
        ))}

        <ChannelMessage
          isBot
          hasMention
          author="Usuário bot"
          date="20/06/2020"
          content={
            <>
              <Mention>@Usuário 01</Mention>, hoje é sabado mesmo que bom amanhã
              é Domingo.
            </>
          }
        />
      </Messages>
      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChanelData;
