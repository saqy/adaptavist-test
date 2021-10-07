import { Typography, Stack, Link } from '@mui/material'
import React from 'react'
// import {
//     Link
// } from "react-router-dom";
import { MainLayout } from '../MainLayout';
import { StyledSection } from './elements';
import { Button } from "../../common";

export const Welcome: React.FC = () => {
    return (
        <MainLayout>
            <StyledSection>
                <Stack spacing={2}>
                    <Typography variant='h2' component='div' >
                        Hello there!
                    </Typography>
                    <Typography variant='h6' component='div' >
                        welcome to Word Count
                    </Typography>
                    <Link href="/word-count" underline="none">
                        <Button  >Click to Proceed</Button>
                    </Link>
                </Stack>
            </StyledSection>
        </MainLayout>
    )
}
