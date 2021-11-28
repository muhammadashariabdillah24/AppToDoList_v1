import React, { Component } from 'react'
import { Text, TextInput, View, TouchableOpacity, ToastAndroid, ActivityIndicator, Button } from 'react-native'
import login from '../../styles/LoginStyle/LoginStyle'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import AsyncStorage from '@react-native-async-storage/async-storage'


class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            icon: 'eye-off-outline',
            accomodate: true,
            email: '',
            password: '',
            isLoading: false
        }
    }

    userLogin() {

        this.setState({ isLoading: true })
        return fetch('https://api-todoapp-pp.herokuapp.com/api/auth/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
            .then((respon) => respon.json())
            .then((resJson) => {

                // Cara 1

                const { access_token } = resJson.token.original
                const error = resJson.error
                console.log(access_token);
                const { user_data } = resJson;

                if (user_data) {

                    AsyncStorage.setItem('tokenn', access_token)
                        .then(() => {
                            this.props.navigation.replace('Home')
                            ToastAndroid.showWithGravity(
                                'Login Berhasil',
                                ToastAndroid.SHORT,
                                ToastAndroid.BOTTOM
                            )
                        })
                        .catch((err) => console.error(err))
                } else if (error === 'Unauthorized') {

                    ToastAndroid.showWithGravity(
                        'Email Dan Password Salah, Silahkan coba login kembali',
                        ToastAndroid.SHORT,
                        ToastAndroid.BOTTOM
                    )
                } else {
                    ToastAndroid.showWithGravity(
                        'Login Gagal, Silahkan coba lagi',
                        ToastAndroid.SHORT,
                        ToastAndroid.BOTTOM
                    )
                }

                // Cara 2

                // const access_token = resJson.token.original.access_token
                // const error = resJson.error
                // AsyncStorage.setItem('token', access_token)
                // console.log(access_token);

                // this.setState({
                //     token: access_token
                // })

                // const { token } = this.state;

                // if (token !== null) {

                //     this.props.navigation.replace('Home')
                //     ToastAndroid.showWithGravity(
                //         'Login Berhasil',
                //         ToastAndroid.SHORT,
                //         ToastAndroid.BOTTOM
                //     )
                // } else if (error === 'Unauthorized') {

                //     Alert.alert('Username Dan Password Salah, Silahkan Login Kembali')

                // }  else {
                //     ToastAndroid.showWithGravity(
                //         'Login Gagal, Silahkan coba lagi',
                //         ToastAndroid.SHORT,
                //         ToastAndroid.BOTTOM
                //     )
                // }
            })
            .catch((err) => {
                console.log(err);

                if (typeof err == "object") {

                    ToastAndroid.showWithGravity(
                        'Email Dan Password Salah, Silahkan coba login kembali',
                        ToastAndroid.SHORT,
                        ToastAndroid.BOTTOM
                    )
                }
            })
            .finally(() => this.setState({ isLoading: false }))
    }



    render() {
        return (
            <View style={login.container}>
                <View style={login.accomodateFrame}>
                    <View style={login.accomodateIconAndTextIcon}>
                        <Icon
                            name="account-circle"
                            style={login.logoIcon}
                        />

                        <Text style={login.textIcon}>Login</Text>
                    </View>


                    <View style={login.accomodateTextinput}>
                        <View style={login.viewTextinput}>
                            <TextInput
                                placeholder="Masukan Email"
                                placeholderTextColor="#A7A7A7"
                                style={login.textInput}
                                inlineImageLeft="for_username"
                                inlineImagePadding={20}
                                onChangeText={(email) => {

                                    this.setState({
                                        email: email
                                    })
                                }}
                            />
                        </View>

                        <View style={login.viewTextinput}>
                            <TextInput
                                placeholder="Masukan Password"
                                placeholderTextColor="#A7A7A7"
                                style={[login.textInput, { width: '90%' }]}
                                inlineImageLeft="for_password"
                                inlineImagePadding={20}
                                secureTextEntry={this.state.accomodate ? true : false}
                                onChangeText={(password) => {

                                    this.setState({
                                        password: password
                                    })
                                }}
                            />

                            <TouchableOpacity
                                style={login.viewIconEye}
                                onPress={() => {
                                    this.setState({
                                        accomodate: !this.state.accomodate
                                    })
                                }}
                            >
                                <Icon name={this.state.accomodate === true ? 'eye-off-outline' : 'eye-outline'} style={login.iconEye} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={login.accomodateButton}>
                        <TouchableOpacity
                            style={login.viewButton}
                            onPress={() => {

                                setTimeout(() => {

                                    // this.accessLogin()
                                    this.userLogin()
                                }, 2000)
                            }}
                        >
                            {
                                this.state.isLoading ? <ActivityIndicator size="large" color="#FFF" /> : <Text style={login.textButton}><Icon name="login-variant" style={login.iconButton} /> Login</Text>
                            }

                        </TouchableOpacity>
                    </View>

                    <Text style={login.textRegister} onPress={() => { this.props.navigation.push('Register') }} >Belum Punya Akun? <Text style={{ color: '#FF0000', fontWeight: 'bold' }}>Register Sekarang!</Text></Text>
                </View>
            </View>
        )
    }
}


// const mapDispatchToProps = (dispatch) => {

//     return {
//         saveToken : (token) => dispatch({
//             type : "SAVE_TOKEN",
//             payToken : token
//         })
//     }
// }

export default Login