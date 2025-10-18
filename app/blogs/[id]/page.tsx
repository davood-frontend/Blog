'use client'
import React from 'react';
import { Box, Typography, IconButton, Tooltip } from '@mui/material';
import { RootState } from '@/app/store';
import { useSelector } from 'react-redux';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import Link from 'next/link';
const page = () => {
    const id = usePathname().split('/').pop()

    const blog = useSelector((state: RootState) => state.blogs.find(item => item.id === id))


    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 8, flexDirection: 'column' }}>
            <Box sx={{ width: '50%' }}>
                <Box sx={{ position: 'relative', width: '100%', height: 350, borderRadius: 5, overflow: 'hidden' }}>
                    <Image
                        src="/blogSample.jpg"
                        alt="blog cover"
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'end', gap: 1, p: 1 }}>
                    <Link href={`/blogs/edit/${blog?.id}`}>
                        <Tooltip title='Edit Blog' arrow>
                            <IconButton color='warning'>
                                <EditRoundedIcon />
                            </IconButton>
                        </Tooltip>
                    </Link>

                    <Tooltip title='Delete Blog' arrow>
                        <IconButton color='error'>
                            <DeleteRoundedIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
                <Box sx={{ mt: 5 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
                        <Typography variant='h3'>
                            {blog?.title}
                        </Typography>
                        <Typography variant='caption'>
                            {blog?.date.slice(0, 10)}
                        </Typography>
                    </Box>
                    <Typography sx={{ mt: 3 }}>
                        {blog?.content}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default page;