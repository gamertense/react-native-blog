import React, { useReducer } from 'react'
import createDataContext from './createDataContext'

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BLOGPOST':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 888),
          title: `blog post #${state.length + 1}`,
        },
      ]
    case 'DELETE_BLOGPOST':
      return state.filter(blogPost => blogPost.id !== action.payload)
  }
}

const addBlogPost = dispatch => {
  return () => {
    dispatch({ type: 'ADD_BLOGPOST' })
  }
}

const deleteBlogPost = dispatch => {
  return id => {
    dispatch({ type: 'DELETE_BLOGPOST', payload: id })
  }
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost },
  [{ id: Math.floor(Math.random() * 888), title: 'blog post #1' }]
)
