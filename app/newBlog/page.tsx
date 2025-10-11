'use client'
import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { blogAdded } from '../reducers/blogSlice';
import { nanoid } from '@reduxjs/toolkit';
import { useRouter } from 'next/navigation';
const page = () => {
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [content, setContent] = useState('')

    const dispatch = useDispatch()
    const router = useRouter()
    const handleformSubmit = () => {
        if (title && content && category) {
            dispatch(blogAdded(title, category, content))
            setTitle('')
            setCategory('')
            setContent('')
            router.push('/blogs')
        }
    }
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 5 }}>
            <Box sx={{ width: 1 / 2, display: 'flex', flexDirection: 'column', rowGap: 5 }}>

                <Typography variant='h3'>
                    Crete a new Blog
                </Typography>
                <form action="" autoComplete='off'>
                    <Grid container spacing={2}>
                        <Grid size={6}>
                            <Typography sx={{ mb: 0.5 }}>
                                Title:
                            </Typography>
                            <TextField fullWidth value={title} onChange={(e) => setTitle(e.target.value)} />
                        </Grid>

                        <Grid size={6}>
                            <Typography sx={{ mb: 0.5 }}>
                                Category:
                            </Typography>
                            <TextField fullWidth value={category} onChange={(e) => setCategory(e.target.value)} />
                        </Grid>
                        <Grid size={12}>
                            <Typography sx={{ mb: 0.5 }}>
                                Content:
                            </Typography>
                            <TextField fullWidth rows={5} multiline value={content} onChange={(e) => setContent(e.target.value)} />
                        </Grid>
                    </Grid>
                </form>
                <Button fullWidth variant='contained' onClick={handleformSubmit}>Create</Button>
            </Box>
        </Box>
    );
};

export default page;