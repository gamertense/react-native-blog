import React, { useReducer } from 'react'

export const BlogContext = React.createContext()

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BLOGPOST':
      return [...state, { title: `blog post #${state.length + 1}` }]
  }
}

export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(blogReducer, [])

  const addBlogPost = () => {
    dispatch({ type: 'ADD_BLOGPOST' })
  }

  return (
    <BlogContext.Provider value={{ blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  )
}
