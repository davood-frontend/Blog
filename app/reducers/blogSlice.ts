import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = [
    {
        id: nanoid(),
        date: new Date().toISOString(),
        title: 'Very first blog',
        content: 'blah blah blah, blah blah blah blah blah... blah blah',
    },
    {
        id: nanoid(),
        date: new Date().toISOString(),
        title: 'Very second blog',
        content: 'blah blah blah, blah blah blah blah blah... blah blah',
    },
    {
        id: nanoid(),
        date: new Date().toISOString(),
        title: 'Very thirf blog',
        content: 'blah blah blah, blah blah blah blah blah... blah blah',
    },
]

const blogsSlice = createSlice({
    name: 'blogs',
    initialState: initialState,
    reducers: {}
})

export default blogsSlice.reducer