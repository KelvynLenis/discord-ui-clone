import React, { useRef, useEffect } from 'react';
import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ServerName: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if(div){
            div.scrollTop = div.scrollHeight;
        }

    }, [messagesRef]);

    return (
        <Container>
            <Messages ref={messagesRef}>
                <ChannelMessage 
                    author="Rinegaum"
                    date="26/09/2021"
                    content="Ui Discord Clone"
                />

                 <ChannelMessage 
                    author="Diego"
                    date="26/09/2021"
                    content={
                        <>
                            <Mention>@Rinegaum</Mention> pizza time
                        </>
                    }
                />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversarem #chat-livre" />
                <InputIcon />
            </InputWrapper>
        </Container>
    );
}

export default ServerName;