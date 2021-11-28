import React, { Component } from 'react'
import { ScrollView, Text, TouchableOpacity, View, RefreshControl, ActivityIndicator } from 'react-native'
import home from '../../styles/HomeStyle/HomeStyle'
import modal from '../../styles/ModalStyle/ModalStyle'
import PropsModal from '../../Props/ModalProps/ModalProps'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import AsyncStorage from '@react-native-async-storage/async-storage'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isHidden: false,
            accId: 0,
            accTitle : '',
            accNote : '',
            data: [],
            isLoading: true,
            token: ''
        }

        this.date = new Date().getDate()
        this.year = new Date().getFullYear()
    }


    componentDidMount() {

        AsyncStorage.getItem('tokenn')
            .then(value => this.setState({

                token: value
            }))
            // Fungsi then
            .then(() => this.getToDo())

        // Jika ingin memakai setTimeout fungsi then harus dikomentar dulu

        // // // Bisa Juga Pakai Cara Ini
        // setTimeout(() => {
        //     this.getToDo()
        // }, 5000);
    }


    changeState(nextState, id, title, note) {

        this.setState({
            isHidden: nextState,
            accId: id,
            accTitle : title,
            accNote : note
        })
    }


    getToDo() {
        return fetch('https://api-todoapp-pp.herokuapp.com/api/todo', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${this.state.token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((resJson) => {
                console.log(resJson);
                this.setState({
                    data: resJson.data,
                    isLoading: false,
                })
            })
            .catch(err => console.log(err))
    }


    delToDo(id) {

        return fetch(`https://api-todoapp-pp.herokuapp.com/api/todo/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.state.token}`,
            }
        })

            .then(response => response.json())
            .then((ress) => {

                console.log(ress);

                if (ress.status === 'success') {

                    this.props.navigation.push('Home')
                } else {
                    console.log('Gagal');
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    userLogout() {

        return fetch('https://api-todoapp-pp.herokuapp.com/api/auth/logout', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.state.token}`,
            },
        })
            .then(response => response.json())
            .then((ress) => {

                console.log(this.state.token);

                const { message } = ress;

                if (message === "Successfully logged out") {

                    AsyncStorage.removeItem('token')
                    this.props.navigation.navigate('Login')

                } else {

                    console.log(null);
                }
            })
            .catch((err) => {
                console.log("catch" + err);
            })
    }


    render() {
        console.log(this.state.token);
        console.log(this.state.data);
        return (
            <View style={home.container}>
                <View style={home.accomodateFrame}>

                    {/* This Modal Area */}

                    <PropsModal
                        AnimationType="fade"
                        TheVisible={this.state.isHidden}
                        StyleModalContainer={modal.container}
                        StyleModalTitleText={modal.titleText}
                        ModalTitleText="Pilih Tindakan"
                        StyleAccomodateModalButton={modal.accomodateButton}
                        StyleButtonClose={modal.buttonClose}
                        ButtonClose={() => {

                            this.changeState(!this.state.isHidden)
                        }}
                        StatusBar={true}
                        StyleTextButtonClose={modal.textButton}
                        NameIconClose="close-thick"
                        StyleIconClose={modal.iconStyle}
                        TextClose="Close"

                        // Button Delete Todo
                        StyleButtonNextChat={modal.buttonDelete}
                        ModalOnPressButtonNextChat={() => {

                            const { accId } = this.state;
                            this.delToDo(accId)
                        }}
                        StyleTextButtonNextChat={modal.textButton}
                        NameIconChat="delete"
                        StyleIconChat={modal.iconStyle}
                        TextButtonNextChat="Delete"

                        // Button Update Todo
                        StyleButtonNextCall={modal.buttonEdit}
                        ModalOnPressButtonNextCall={() => {

                            const { accId, accTitle, accNote } = this.state;
                            this.props.navigation.navigate({ name: 'UpdateMyToDo', params: { id: accId, title: accTitle, note: accNote } })
                        }}
                        StyleTextButtonNextCall={modal.textButton}
                        NameIconCall="pencil-plus"
                        StyleIconCall={modal.iconStyle}
                        TextButtonNextCall="Update"

                    />

                    {/*  */}

                    <View style={home.viewIconDetail}>
                        <TouchableOpacity
                            style={home.buttonIconDetail}
                        >
                            <Icon
                                name="arrow-left"
                                style={home.iconDetail}
                            />
                        </TouchableOpacity>

                        <Text style={home.textDetail}>My ToDo</Text>

                        <TouchableOpacity
                            style={home.buttonIconDetail}
                            onPress={() => {

                                this.userLogout()
                            }}
                        >
                            <Icon
                                name="account-circle-outline"
                                style={home.iconDetail}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={home.accomodateBody}>

                        <RefreshControl
                            refreshing={this.state.onRefresh}
                            onRefresh={() => {

                                setTimeout(() => {

                                    this.setState({
                                        onRefresh: false
                                    })

                                }, 2000)
                            }}
                        />

                        <TouchableOpacity
                            style={home.buttonAddContent}
                            onPress={() => {
                                this.props.navigation.replace('MyToDo')
                            }}
                        >
                            <Icon
                                name="plus"
                                style={home.iconButtonAddContent}
                            />
                        </TouchableOpacity>
                        <ScrollView style={home.accomodateToDo}>

                            {this.state.isLoading ? (
                                <ActivityIndicator size="large" color="dodgerblue" />
                            ) : (

                                this.state.data.map((value, index) => (

                                    <TouchableOpacity
                                        onLongPress={() => {

                                            this.changeState(true, value.id, value.title, value.note)
                                        }}
                                        onPress={() => {

                                            this.props.navigation.navigate({ name: 'ShowMyToDo', params: { id: value.id } })
                                        }}
                                        style={home.viewBoxToDo}
                                        key={index}
                                    >
                                        <View style={home.viewTextToDo}>
                                            <Text style={home.textBigToDo}>{value.title.substring(0, 10)} ...</Text>
                                            <Text style={home.textSmallToDo}>{value.note.substring(0, 20)} ...</Text>
                                        </View>

                                        <View style={home.viewDatetime}>
                                            <Text style={home.textDateTime}>{this.date}/{this.year}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )))

                            }

                        </ScrollView>
                    </View>
                </View>
            </View>
        )
    }
}

// const mapStateToProps = (state) => {

//     return {
//         stateToken: state.tokenReducers.token
//     }
// }

export default Home