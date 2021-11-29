import * as React from 'react';
import { Container, Navbar } from 'react-bootstrap';

export const Header = () => {
    return (
        <Navbar fixed="top" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    Colored_Note_it
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
};