import React, { Component } from 'react'
import { Text, TextInput, View, TouchableOpacity, ScrollView, ActivityIndicator, Alert, ToastAndroid } from 'react-native'
import regis from '../../styles/RegisterStyle/RegisterStyle'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

class Register extends Component {

    constructor(props) {
        super(props)

        this.state = {
            // State Register
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            isLoading: false,

            // Check
            check: '',
            id: 0,

            // Control Password And Re Type Password
            iconPassword: 'eye-off-outline',
            iconRetypepassword: 'eye-off-outline',
            accomodatePassword: true,
            accomodateRetypePassword: true
        }
    }


    userRegis() {
        this.setState({ isLoading: true })

        return fetch('https://api-todoapp-pp.herokuapp.com/api/auth/register', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                password_confirmation: this.state.password_confirmation
            })
        })
            .then((respon) => respon.json())
            .then((resJson) => {

                const { name, password, password_confirmation } = this.state;

                if (name !== name.toLowerCase()) {
                    Alert.alert('Username Harus Huruf Kecil Semua')
                } else if (password.length <= 6 && password_confirmation.length <= 6) {
                    Alert.alert('Password Harus Lebih Dari 6 Karakter')
                } else if (password !== password_confirmation) {
                    Alert.alert('Password Konfirmasi Tidak Cocok')
                } else if (typeof resJson == 'string') {
                    Alert.alert('Email Sudah Digunakan, Mohon Gunakan Email Yang Lain')
                } else if (name === name.toLowerCase() && password.length >= 6 && password_confirmation.length >= 6 && password === password_confirmation && typeof resJson !== 'string') {

                    this.props.navigation.replace('Login')
                    ToastAndroid.showWithGravity(
                        'Register Berhasil',
                        ToastAndroid.SHORT,
                        ToastAndroid.BOTTOM
                    )
                }

                // if (name !== name.toLowerCase()) {
                //     Alert.alert('Username Harus Huruf Kecil Semua')
                // } else if (password.length <= 6 && password_confirmation.length <= 6) {
                //     Alert.alert('Password Harus Lebih Dari 6 Karakter')
                // } 
                // // else if (password !== password_confirmation) {
                // //     Alert.alert('Password Konfirmasi Tidak Cocok')
                // // } 
                // else if (typeof resJson == 'string') {
                    
                //     if (email.email[0] != '') {
                //         Alert.alert('Email Sudah Digunakan, Mohon Gunakan Email Yang Lain')
                //         this.props.navigation.replace('Register')
                //     } else if (email.password[0] != '') {
                //         Alert.alert('Password Konfirmasi Tidak Cocok')
                //         this.props.navigation.replace('Register')
                //     }
                // } else if (name === name.toLowerCase() && password.length >= 6 && password_confirmation.length >= 6 && password === password_confirmation) {

                //     this.props.navigation.replace('Home')
                //     ToastAndroid.showWithGravity(
                //         'Register Berhasil',
                //         ToastAndroid.SHORT,
                //         ToastAndroid.BOTTOM
                //     )
                // }


            })
            .catch((err) => {
                console.log(err);
                Alert.alert('Koneksi Anda Lemah, Silahkan Coba Lagi')
            })
            .finally(() => {
                this.setState({
                    isLoading: false
                })
            })
    }

    render() {

        console.log(this.state.check);
        return (
            <View style={regis.container}>
                <ScrollView style={regis.accomodateFrame}>
                    <View style={regis.accomodateIconAndTextIcon}>
                        <Icon
                            name="account-circle"
                            style={regis.logoIcon}
                        />

                        <Text style={regis.textIcon}>Register</Text>
                    </View>

                    <ScrollView>
                        <View style={regis.accomodateTextinput}>
                            <View style={regis.viewTextinput}

                            >
                                <TextInput
                                    selectTextOnFocus={true}
                                    placeholder="Masukan Username"
                                    autoCompleteType="username"
                                    placeholderTextColor="#A7A7A7"
                                    style={regis.textInput}
                                    inlineImageLeft="for_username"
                                    inlineImagePadding={20}
                                    onChangeText={(username) => {
                                        this.setState({
                                            name: username
                                        })
                                    }}
                                />
                            </View>

                            <View style={regis.viewTextinput}>
                                <TextInput
                                    placeholder="Masukan Email"
                                    autoCompleteType="email"
                                    placeholderTextColor="#A7A7A7"
                                    style={regis.textInput}
                                    inlineImageLeft="for_email"
                                    inlineImagePadding={20}
                                    onChangeText={(email) => {
                                        this.setState({
                                            email: email
                                        })
                                    }}
                                />
                            </View>

                            <View style={regis.viewTextinput}>
                                <TextInput
                                    placeholder="Masukan Password"
                                    autoCompleteType="password"
                                    placeholderTextColor="#A7A7A7"
                                    style={[regis.textInput, { width: '90%' }]}
                                    inlineImageLeft="for_password"
                                    inlineImagePadding={20}
                                    secureTextEntry={this.state.accomodatePassword ? true : false}
                                    onChangeText={(password) => {
                                        this.setState({
                                            password: password
                                        })
                                    }}
                                />

                                <TouchableOpacity
                                    style={regis.viewIconEye}
                                    onPress={() => {
                                        this.setState({
                                            accomodatePassword: !this.state.accomodatePassword
                                        })
                                    }}
                                >
                                    <Icon name={this.state.accomodatePassword === true ? 'eye-off-outline' : 'eye-outline'} style={regis.iconEye} />
                                </TouchableOpacity>
                            </View>

                            <View style={regis.viewTextinput}>
                                <TextInput
                                    placeholder="Masukan Ulang Password"
                                    autoCompleteType="password"
                                    placeholderTextColor="#A7A7A7"
                                    style={[regis.textInput, { width: '90%' }]}
                                    inlineImageLeft="for_password"
                                    inlineImagePadding={20}
                                    secureTextEntry={this.state.accomodateRetypePassword ? true : false}
                                    onChangeText={(password_confirmation) => {

                                        this.setState({ password_confirmation: password_confirmation })
                                    }}
                                />

                                <TouchableOpacity
                                    style={regis.viewIconEye}
                                    onPress={() => {
                                        this.setState({
                                            accomodateRetypePassword: !this.state.accomodateRetypePassword
                                        })
                                    }}
                                >
                                    <Icon name={this.state.accomodateRetypePassword === true ? 'eye-off-outline' : 'eye-outline'} style={regis.iconEye} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={regis.accomodateButton}>
                            <TouchableOpacity
                                style={regis.viewButton}
                                onPress={() => {
                                    this.userRegis()
                                }}
                            >
                                {
                                    this.state.isLoading ? <ActivityIndicator size="large" color="#fff" /> : <Text style={regis.textButton}><Icon name="login-variant" style={regis.iconButton} /> Register</Text>
                                }
                            </TouchableOpacity>
                        </View>

                        <Text style={regis.textRegister} onPress={() => { this.props.navigation.goBack() }}>Sudah Punya Akun ? <Text style={{ color: '#FF0000', fontWeight: 'bold' }}>Login Sekarang!</Text></Text>
                    </ScrollView>
                </ScrollView>
            </View>
        )
    }
}

export default Register


// register(){
//     this.setState({
//         isLoading: true
//     })

//     const { name, email, password, password_confirmation } = this.state;

//     const dataToSend = {
//         name: name,
//         email: email,
//         password: password,
//         password_confirmation: password_confirmation
//     }

//     // 
//     var formBody = [];
//     for (let key in dataToSend) {
//         var encodeKey = encodeURIComponent(key)
//         var encodeValue = encodeURIComponent(dataToSend[key])

//         formBody.push(encodeKey + '=' + encodeValue);
//     }

//     formBody = formBody.join('&')

//     var myHeaders = new Headers();
//     myHeaders.append("Accept", "application/json");

//     fetch('https://api-todoapp-pp.herokuapp.com/api/auth/register', {
//         method: 'POST',
//         redirect: 'follow',
        // With Raw
//         body: JSON.stringify(dataToSend),
        // With Param
        // body: formBody,
//         headers: myHeaders
//     })
//         .then(response => response.json())
//         .then(result => console.log(result))
//         .catch(err => console.log(err))
//         .finally(() => this.setState({ isLoading: false }))
// }