import React, { useState } from 'react';
import { View, Text, TextInput,StyleSheet, Button } from 'react-native';

const BlogPostForm = (props) => {

    const [title, setTitle ] = useState(props.title);
    const [content, setContent ] = useState(props.content);

    const onSave = (title, content) => {
        props.onSubmit( title, content)
    }

    return (
        <View style={styles.view}>
            <Text style={styles.label}>Enter Title</Text>
            <TextInput style={styles.input} value={ title } onChangeText={ text => setTitle(text)}/>
            <Text style={styles.label}>Enter Content</Text>
            <TextInput style={styles.input} value={ content } onChangeText={ text => setContent(text)}/>
            <Button title="Save Blog Post" onPress={() => onSave( title, content )} />
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        paddingTop: 200
    },
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
})

export default BlogPostForm;