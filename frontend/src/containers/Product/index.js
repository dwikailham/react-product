import React from 'react'
import { Box, Container, Typography } from '@mui/material';
import LayoutContent from '../../components/Layout'
import ProductContent from '../../components/ProductContent';

export default function Product() {
    return (
        <div>
            <LayoutContent children={
                (
                    <React.Fragment>
                        <Box
                            component="main"
                            sx={{
                                flexGrow: 1,
                                py: 8
                            }}
                        >
                            <Container maxWidth="lg">
                                <ProductContent />
                            </Container>
                        </Box>
                    </React.Fragment>
                )
            } />
        </div>
    )
}
