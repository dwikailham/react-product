import React from 'react'
import { Box, Divider, Drawer, Typography, useMediaQuery, Button } from '@mui/material';

import { ShoppingBag as IconProduct } from '../../utils/icon/shopping-bag'

export default function Sidebar(props) {
    const { open, onClose } = props;
    const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
        defaultMatches: true,
        noSsr: false
    });

    const content = (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%'
                }}
            >
                <div>
                    <Box sx={{ p: 3 }}>
                        {/* <Link
                            to="/"
                        >

                        </Link> */}
                    </Box>
                    <Box sx={{ px: 2 }}>
                        <Box
                            sx={{
                                alignItems: 'center',
                                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                                cursor: 'pointer',
                                display: 'flex',
                                justifyContent: 'space-between',
                                px: 3,
                                py: '11px',
                                borderRadius: 1
                            }}
                        >
                            <div>
                                <Typography
                                    color="inherit"
                                    variant="subtitle1"
                                >
                                    Dwika Ilham Zakaria
                                </Typography>
                                <Typography
                                    color="neutral.400"
                                    variant="body2"
                                >
                                    @dwikailham37@gmail.com
                                </Typography>
                            </div>
                        </Box>
                    </Box>
                </div>
                <Divider
                    sx={{
                        borderColor: '#2D3748',
                        my: 3
                    }}
                />
                <Box sx={{ flexGrow: 1, px: 2 }}>
                    <Button
                        component="a"
                        startIcon={<IconProduct />}
                        disableRipple
                        sx={{
                            backgroundColor: 'rgba(255,255,255, 0.08)',
                            borderRadius: 1,
                            color: 'secondary.main',
                            fontWeight: 'fontWeightBold',
                            justifyContent: 'flex-start',
                            px: 3,
                            textAlign: 'left',
                            textTransform: 'none',
                            width: '100%',
                            '& .MuiButton-startIcon': {
                                color: 'secondary.main'
                            },
                            '&:hover': {
                                backgroundColor: 'rgba(255,255,255, 0.08)'
                            }
                        }}
                    >
                        <Box sx={{ flexGrow: 1 }}>
                            {"Product"}
                        </Box>
                    </Button>
                </Box>
            </Box>
        </>
    );

    if (lgUp) {
        return (
            <Drawer
                anchor="left"
                open
                PaperProps={{
                    sx: {
                        backgroundColor: 'neutral.900',
                        color: '#FFFFFF',
                        width: 280
                    }
                }}
                variant="permanent"
            >
                {content}
            </Drawer>
        );
    }

    return (
        <Drawer
            anchor="left"
            onClose={onClose}
            open={open}
            PaperProps={{
                sx: {
                    backgroundColor: 'neutral.900',
                    color: '#FFFFFF',
                    width: 280
                }
            }}
            sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
            variant="temporary"
        >
            {content}
        </Drawer>
    );
}
