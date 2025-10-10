import { createSlice, nanoid } from '@reduxjs/toolkit'
import { RootState } from '../store'
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
    reducers: {
        blogAdded: (state, action) => { state.push(action.payload) }
    }
})
export const { blogAdded } = blogsSlice.actions
export default blogsSlice.reducer