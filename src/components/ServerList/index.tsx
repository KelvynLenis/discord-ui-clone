import React from 'react';

import ServerButton from '../ServerButton';

import { Container, Separator } from './styles';

const ServerList: React.FC = () => {
   
   return(
    <Container>
        <ServerButton />

        <Separator />

        <ServerButton />
        <ServerButton  hasNotifications />
        <ServerButton />
        <ServerButton />
        <ServerButton />
        <ServerButton  mentions={3}/>
        <ServerButton />
        <ServerButton hasNotifications />

    </Container>
   )
};

export default ServerList;