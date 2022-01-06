import React from 'react';

import { Container, Roler, User, Avatar } from './styles';

interface UserProps {
    nickname: string;
    isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
    return (
        <User>
            <Avatar className={isBot ? 'bot' : ''} />
            <strong>{nickname}</strong>

            {isBot && <span>Bot</span>}
        </User>
    )
}

const UserList: React.FC = () => {
    return (
        <Container>
            <Roler>Disponível - 1</Roler>
            <UserRow nickname="Rinegaum"/>

            <Roler>Disponível - 18</Roler>
            <UserRow nickname="Diego" isBot />
        </Container>
    );
}

export default UserList;