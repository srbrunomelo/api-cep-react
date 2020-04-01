import React from 'react';

import { Container } from './styles';

export default function Header(props) {
    return (
        <Container>
            <h1>{props.title}</h1>
        </Container>
    );
}


