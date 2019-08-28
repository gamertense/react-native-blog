import React, { useContext } from 'react'
import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

export default function EditScreen({ navigation }) {
  const id = navigation.getParam('id')
  const { state, editBlogPost } = useContext(Context)

  const blogPost = state.find(blogPost => blogPost.id === id)

  const handleSubmit = (title, content) => {
    editBlogPost(id, title, content, () => navigation.pop())
  }

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={handleSubmit}
    />
  )
}
