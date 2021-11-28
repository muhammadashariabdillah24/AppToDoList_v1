import React from 'react'
import {
    Alert,
    Text,
    TextInput,
    ToastAndroid,
    TouchableOpacity,
    View
} from 'react-native'

// Import Asynstorage
import AsyncStorage from '@react-native-async-storage/async-storage'

import todo from '../../styles/ToDoContentStyle/ToDoContentStyle'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

class TodoContent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            note: '',
            status: '',
            token: ''
        }


    }

    componentDidMount() {
        AsyncStorage.getItem('tokenn')
            .then(value => this.setState({

                token: value

            }))
    }

    createToDo() {
        return fetch('https://api-todoapp-pp.herokuapp.com/api/todo', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.state.token}`,
            },
            body: JSON.stringify({
                title: this.state.title,
                note: this.state.note
            })

        })
            .then((respon) => respon.json())
            .then((resJson) => {

                console.log(resJson.status);

                const { status } = resJson;

                if (status === 'success') {

                    this.props.navigation.push('Home')
                    ToastAndroid.showWithGravity(
                        'Berhasil Menyimpan',
                        ToastAndroid.SHORT,
                        ToastAndroid.BOTTOM
                    )

                } else {
                    ToastAndroid.showWithGravity(
                        'Gagal Menyimpan',
                        ToastAndroid.SHORT,
                        ToastAndroid.BOTTOM
                    )
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }


    render() {
        console.log(this.state.title);
        console.log(this.state.note);
        return (
            <View style={todo.container}>
                <View style={todo.accomodateFrame}>
                    <View style={todo.viewIconDetail}>
                        <TouchableOpacity
                            style={todo.buttonIconDetail}
                            onPress={() => {
                                this.props.navigation.replace('Home')
                            }}
                        >
                            <Icon
                                name="arrow-left"
                                style={todo.iconDetail}
                            />
                        </TouchableOpacity>

                        <Text style={todo.textDetail}>Todo Content</Text>

                        <TouchableOpacity
                            style={todo.buttonIconDetail}
                        >
                            <Icon
                                name="account-circle-outline"
                                style={todo.iconDetail}
                            />
                        </TouchableOpacity>
                    </View>


                    <View style={todo.accomodateContent}>
                        <TouchableOpacity
                            style={todo.buttonSaveContent}
                            onPress={() => {
                                this.createToDo()
                            }}
                        >
                            <Icon
                                name="content-save"
                                style={todo.iconButtonContent}
                            />
                        </TouchableOpacity>

                        <View style={todo.accomodateTexInputTitle}>
                            <TextInput
                                autoFocus={true}
                                placeholder="Masukan Judul"
                                placeholderTextColor="#A7A7A7"
                                style={todo.viewTextInputTitle}
                                onChangeText={(title) => {

                                    this.setState({
                                        title: title
                                    })
                                }}
                            />
                        </View>

                        <View style={todo.accomodateTextInputContent}>
                            <TextInput
                                placeholder="Masukan Content"
                                placeholderTextColor="#A7A7A7"
                                multiline={true}
                                numberOfLines={10}
                                textAlignVertical="top"
                                style={todo.viewTextInputContent}
                                onChangeText={(note) => {

                                    this.setState({
                                        note: note
                                    })
                                }}
                            />
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         stateToken: state.tokenReducers
//     }
// }

// const mapDispatchToProps = (dispatch) => {

//     return {
//         saveToken: (token) => dispatch({
//             type: "SAVE_TOKEN",
//             payToken: token
//         })
//     }
// }

export default TodoContent