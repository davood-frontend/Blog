'use client'
import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { RootState } from '@/app/store';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { blogUpdated } from '@/app/reducers/blogSlice';
import { useRouter, notFound, usePathname } from 'next/navigation';

const page = () => {
    const id = usePathname().split('/').pop()
    if (!id) return notFound()

    const blog = useSelector((state: RootState) => state.blogs.find(blog => blog.id === id))
    const dispatch = useDispatch()
    const router = useRouter()

    const [title, setTitle] = useState(blog?.title)
    const [category, setCategory] = useState(blog?.category)
    const [content, setContent] = useState(blog?.content)
    
    const handleformSubmit = () => {
        if (title && content && category) {
            dispatch(blogUpdated({ title, category, content, id }))
            router.push(`/blogs/${id}`)
        }
    }
    
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 5 }}>
            <Box sx={{ width: 1 / 2, display: 'flex', flexDirection: 'column', rowGap: 5 }}>

                <Typography variant='h3'>
                    Edit the Blog
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
                <Button fullWidth variant='contained' onClick={handleformSubmit}>Update</Button>
            </Box>
        </Box>
    );
};

export default page;