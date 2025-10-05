'use client'
import React from 'react';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
//background color black
//golden vains 
//dark theme in general
const BlogsList = () => {
    const blogs = useSelector((state: RootState) => state.blogs)
    return (
        <Grid sx={{ p: 2 }} container spacing={2}>
            {blogs.map((item, index) => (
                <Grid key={index} sx={{ border: '1px solid black', borderRadius: 4, overflow: 'hidden' }} size={6} >
                    <Box sx={{ position: 'relative', width: '100%', height: 350 }}>
                        <Image
                            src="/blogSample.jpg"
                            alt="blog cover"
                            fill
                            objectFit='cover'
                            priority
                        />
                    </Box>
                    <Box sx={{ p: 1.5 }}>
                        <Typography variant='h5' >
                            {item.title}
                        </Typography>
                        <Typography>
                            {item.content}
                        </Typography>
                    </Box>
                </Grid>
            ))}
        </Grid>
    );
};

export default BlogsList;