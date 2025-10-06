import React from 'react';
import { Box, AppBar, Toolbar, Button, Typography, InputBase} from '@mui/material';
const Header = () => {
    return (
        <Box sx={{ flexGrow: 1, zIndex: 100 }}>
            <AppBar position='static'>
                <Toolbar>
                    <Box>
                      
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;