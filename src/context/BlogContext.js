import React, { useReducer } from 'react'
import createDataContext from './createDataContext'

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BLOGPOST':
      return [...state, { title: `blog post #${state.length + 1}` }]
  }
}

const addBlogPost = dispatch => {
  return () => {
    dispatch({ type: 'ADD_BLOGPOST' })
  }
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost },
  []
)
