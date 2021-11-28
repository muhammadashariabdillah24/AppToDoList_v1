import React, { Component } from 'react'
import {
    ToastAndroid,
    View
} from 'react-native'
// Import LottiView
import LottieView from 'lottie-react-native';

// Import Style
import splash from '../../styles/SplashScreenStyle/SplashScreenStyle';

// Import AsyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';


class SplashScreen extends Component {

    // Cara 1

    // constructor(){
    //     super();

    //     setTimeout(() => {

    //         AsyncStorage.getItem('token')
    //             .then(value => {

    //                 if (value !== null) {
    //                     console.log(value);
    //                     this.props.navigation.replace('Home')
    //                 } else {
    //                     this.props.navigation.replace('Login')
    //                     ToastAndroid.showWithGravity(
    //                         'Silahkan Login Terlebih Dahulu',
    //                         ToastAndroid.SHORT,
    //                         ToastAndroid.BOTTOM
    //                     )
    //                 }
    //             })
    //     }, 5000)
    // }


    // Cara 2

    thisTimeOut() {

        return setTimeout(() => {

            AsyncStorage.getItem('tokenn')
                .then(value => {

                    if (value !== null) {
                        console.log(value);
                        this.props.navigation.replace('Home')
                    } else {
                        this.props.navigation.replace('Login')
                        ToastAndroid.showWithGravity(
                            'Silahkan Login Terlebih Dahulu',
                            ToastAndroid.SHORT,
                            ToastAndroid.BOTTOM
                        )
                    }
                })
        }, 5000)
    }

    componentDidMount() {

        this.thisTimeOut()
    }

    componentWillUnmount() {

        clearTimeout(this.thisTimeOut())
    }

    render() {
        return (
            <View style={splash.container}>
                <LottieView
                    source={require('../../assets/LottieView/imageLottie.json')}
                    style={splash.styleForLottie}
                    autoPlay
                    loop
                    speed={1}
                />
            </View>
        )
    }
}

// const mapStateToProps = (state) => {

//     return {
//         stateToken: state.tokenReducers.token
//     }
// }

export default SplashScreen