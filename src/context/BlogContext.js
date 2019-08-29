import createDataContext from './createDataContext'
import jsonServer from '../api/jsonServer'

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 888),
          title: action.payload.title,
          content: action.payload.content,
        },
      ]
    case 'get_blogposts':
      return action.payload
    case 'edit_blogpost':
      return state.map(blogPost =>
        blogPost.id === action.payload.id ? action.payload : blogPost
      )
    case 'delete_blogpost':
      return state.filter(blogPost => blogPost.id !== action.payload)
  }
}

const getBlogPosts = dispatch => {
  return async () => {
    const response = await jsonServer.get('/blogPosts')
    dispatch({ type: 'get_blogposts', payload: response.data })
  }
}

const addBlogPost = dispatch => {
  return (title, content, callback) => {
    dispatch({ type: 'add_blogpost', payload: { title, content } })
    if (callback) callback()
  }
}

const editBlogPost = dispatch => {
  return (id, title, content, callback) => {
    dispatch({ type: 'edit_blogpost', payload: { id, title, content } })
    if (callback) callback()
  }
}

const deleteBlogPost = dispatch => {
  return id => {
    dispatch({ type: 'delete_blogpost', payload: id })
  }
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, getBlogPosts, editBlogPost, deleteBlogPost },
  []
)
