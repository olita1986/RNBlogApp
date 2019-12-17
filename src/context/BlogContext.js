import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'get_posts':
            return action.payload
        case 'add_post':
            return [...state, action.payload]
        case 'delete_post':
            return state.filter( post => post.id !== action.payload)
        case 'update_post':
            return state.map( post => {
                return post.id === action.payload.id ?
                    action.payload : post
            })
        default:
            return state 
    }
}

const getBlogPosts = dispatch => {
    return async () => {
        const response = await jsonServer.get('/blogposts');
        dispatch({type: 'get_posts', payload: response.data})
    }
}

const addBlogPost = (dispatch) => {
    return async (title, content, callback) => {
        const response = await jsonServer.post('/blogposts', {
            title,
            content
        });

        dispatch({type: 'add_post', payload: response.data})
        if (callback) {
            callback();
        }
        
    }
}

const updateBlogPost = (dispatch) => {
    return async (id, title, content, callback) => {
        const response = await jsonServer.put(`/blogposts/${id}`, {
            title,
            content
        })
        console.log(response)
        dispatch({type: 'update_post', payload: response.data})
        if (callback) {
            callback()
        };
    }
}

const deleteBlogPost = (dispatch) => {
    return async (id) => { 
        dispatch({type: 'delete_post', payload: id})
        await jsonServer.delete(`/blogposts/${id}`)
    } 
}

export const { Context, Provider } = createDataContext(
    blogReducer,
    { 
        addBlogPost,
        deleteBlogPost,
        updateBlogPost, 
        getBlogPosts
    },
    []
)