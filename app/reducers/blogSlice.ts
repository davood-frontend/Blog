import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
type blog = {
    id: string,
    date: string,
    title: string,
    category: string,
    content: string
}
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
        blogAdded: {
            reducer(state, action: PayloadAction<blog>) {
                state.push(action.payload)
            },
            prepare(title, category, content) {
                //complex
                return {
                    payload: {
                        title,
                        category,
                        content,
                        id: nanoid(),
                        date: new Date().toISOString()
                    }
                }
            }
        }
    }
})
export const { blogAdded } = blogsSlice.actions
export default blogsSlice.reducer
