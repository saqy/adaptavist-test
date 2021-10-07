import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Container } from '@mui/material';



export const MainLayout: React.FC = (props) => {
    return (
        <>
            <Header />
            <Container>
                {props.children}
            </Container>
            <Footer />
        </>

    )
}
