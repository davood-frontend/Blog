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
        category: 'Anime',
        content: 'blah blah blah, blah blah blah blah blah... blah blah',
    },
    {
        id: nanoid(),
        date: new Date().toISOString(),
        title: 'Very second blog',
        category: 'Anime',
        content: 'blah blah blah, blah blah blah blah blah... blah blah',
    },
    {
        id: nanoid(),
        date: new Date().toISOString(),
        title: 'Very thirf blog',
        category: 'Anime',
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
        },
        blogUpdated: (state, action: PayloadAction<{ title: string, content: string, category: string, id: string }>) => {
            const currentBlog = state.find(state => state.id === action.payload.id)
            if (currentBlog) {
                currentBlog.title = action.payload.title
                currentBlog.category = action.payload.category
                currentBlog.content = action.payload.content
            }
        }
    }
})
export const { blogAdded, blogUpdated } = blogsSlice.actions
export default blogsSlice.reducer
