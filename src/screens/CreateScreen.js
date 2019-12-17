import React, { useContext, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm'

const CreateScreen = (props) => {
    const  { addBlogPost }  = useContext(Context)

    const onSave = (title, content) => {
        addBlogPost( title, content, () => {
            props.navigation.goBack()
        } )
    }

    return <BlogPostForm 
                {...props}
                title=""
                content=""
                onSubmit={(title, content) => {
                    onSave(title, content)
                }}
        />
}

const styles = StyleSheet.create()

export default CreateScreen;