import React, { useContext } from 'react'
import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

export default ({ navigation }) => {
  const { addBlogPost } = useContext(Context)

  const handleSubmit = (title, content) => {
    addBlogPost(title, content, () => navigation.navigate('Index'))
  }

  return <BlogPostForm onSubmit={handleSubmit} />
}
