import React from 'react';
import { Box, AppBar, Toolbar, Button, Typography, InputBase, IconButton, Paper, Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
const Header = () => {
    return (
        <Box sx={{ flexGrow: 1, zIndex: 100 }}>
            <AppBar position='static' sx={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px;' }}>
                <Toolbar sx={{ backgroundColor: 'whitesmoke' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
                        <Box>
                            <Avatar src='/blogger.png' />
                        </Box>
                        <Paper>
                            <InputBase placeholder='Search' sx={{ felx: 1, ml: 1, px: 1 }} />
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                        <Box>
                            <Button>Blogs</Button>
                            <Button>About</Button>
                            <Button>Home</Button>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;