import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Home = ({ route }) => {
    const [post, setPost] = useState([])
    const { name } = route.params.userData

    // Fetching particular user posts by its ID
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${route.params.userData.id}`);
                const posts = response.data
                setPost(posts)
            } catch (error) {
                console.error(error);
            }
        };

        fetchPosts();
    }, []);

    // Render Posts list
    const renderPostList = ({ item }) => {
        return (
            <View style={styles.postView}>
                <Text style={styles.title}>Title:- {item.title}</Text>
                <Text style={styles.body}>Body:- {item.body}</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.name}>Name:- {name}</Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={post}
                renderItem={renderPostList}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        paddingHorizontal: wp(5)
    },
    name: {
        fontSize: wp(5),
    },
    title: {
        fontSize: wp(5),
        color: "#FFF"

    },
    body: {
        fontSize: wp(5),
        color: "#FFF"

    },
    postView: {
        backgroundColor: "#1CB5E0",
        padding: wp(5),
        marginVertical: hp(2),
        borderRadius: wp(5),

    }
})