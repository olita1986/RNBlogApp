import React, { useContext, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm'

const EditScreen = (props) => {
    const { state } = useContext(Context);
    const post = state.find( post => post.id === props.navigation.getParam('id'));
    
    const  { updateBlogPost } = useContext(Context)

    const onSave = (title, content) => {
        updateBlogPost( post.id, title, content, () => {
            props.navigation.goBack()
        })
    }

    return <BlogPostForm 
                {...props}
                title={post.title}
                content={post.content}
                onSubmit={(title, content) => {
                    onSave(title, content)
                }}
        />
}

const styles = StyleSheet.create()

export default EditScreen;