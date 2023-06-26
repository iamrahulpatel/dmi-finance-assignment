import { Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import actionType from '../../store/actionType'



const Login = ({ navigation }) => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userList, setUserList] = useState([])

    // Fetching the Users list from API
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                const users = response.data
                setUserList(users)
            } catch (error) {
                console.error(error);
            }
        };
        fetchUsers()
    }, [])

    // Validating email and password, dispatching the LOGIN data
    const validateEmail = () => {
        if (email && password) {
            let userData = userList.filter(data => (data?.email).toLocaleLowerCase() == email.toLocaleLowerCase())
            if (userData[0])
                dispatch({
                    type: actionType.LOGIN,
                    payload: {
                        email, password,
                        nav: navigation,
                    }
                })
            else {
                Alert.alert("Please enter valid Email")
            }

        } else {
            Alert.alert("Please enter Email and Password")
        }

    }

    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                placeholder='Enter Email'
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={styles.textInput}
                keyboardType='email-address'
                autoCapitalize='none'
            />
            <TextInput
                placeholder='Enter Password'
                value={password}
                onChangeText={(text) => setPassword(text)}
                style={styles.textInput}
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.btnView}
                onPress={() => validateEmail()}
            >
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    textInput: {
        padding: wp(5),
        marginHorizontal: 20,
        backgroundColor: "#F3F5F9",
        marginVertical: wp(3),
        borderRadius: wp(5)
    },
    btnView: {
        backgroundColor: "#1CB5E0",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        padding: wp(3),
        borderRadius: wp(5),
        paddingHorizontal: wp(10),
        marginTop: hp(4)
    },
    loginText: {

    }
})