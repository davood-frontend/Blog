'use client'
import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { alpha } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import EastRoundedIcon from '@mui/icons-material/EastRounded';
const BlogsList = () => {
    const blogs = useSelector((state: RootState) => state.blogs)
    return (
        <Grid sx={{ p: 2 }} container spacing={3}>
            {blogs.map((item, index) => (
                <Grid
                    size={4}
                    key={index}
                    sx={{
                        borderRadius: 4,
                        overflow: 'hidden',
                        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                        transition: '0.3s ease',
                        '&:hover': {
                            transform: 'translateY(-4px)',
                            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                        },
                        '&:hover .card-button': {
                            backgroundColor: (theme) => alpha(theme.palette.warning.main, 0.15),
                            color: (theme) => theme.palette.warning.dark,
                        },
                    }}
                >
                    <Box sx={{ position: 'relative', width: '100%', height: 350 }}>
                        <Image
                            src="/blogSample.jpg"
                            alt="blog cover"
                            fill
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                    </Box>

                    <Box
                        sx={{ p: 2, display: 'flex', alignItems: 'end', justifyContent: 'space-between', }}
                    >
                        <Box>
                            <Typography variant="h5">{item.title}</Typography>
                            <Typography>{item.content.substring(0, 50) + '...'}</Typography>
                        </Box>

                        <Box>
                            <IconButton
                                className="card-button"
                                color="warning"
                                sx={{ transition: 'background-color 0.5s ease, color 0.5s ease', }}
                            >
                                <EastRoundedIcon />
                            </IconButton>
                        </Box>
                    </Box>
                </Grid>

            ))}
        </Grid>
    );
};

export default BlogsList;