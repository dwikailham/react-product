import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';

const DashboardLayoutRoot = styled('div')(({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
        paddingLeft: 280
    }
}));

export default function LayoutContent(props) {
    const { children } = props;
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    return (
        <div>
            <DashboardLayoutRoot>
                <Box
                    sx={{
                        display: 'flex',
                        flex: '1 1 auto',
                        flexDirection: 'column',
                        width: '100%'
                    }}
                >
                    {children}
                </Box>
            </DashboardLayoutRoot>
            <Navbar onSidebarOpen={() => setSidebarOpen(true)} />
            <Sidebar
                onClose={() => setSidebarOpen(false)}
                open={isSidebarOpen}
            />
        </div>
    )
}
