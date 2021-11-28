import React from 'react'
import {
    ActivityIndicator,
    Text,
    TextInput,
    ToastAndroid,
    TouchableOpacity,
    View
} from 'react-native'

import todo from '../../styles/ToDoContentStyle/ToDoContentStyle'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import AsyncStorage from '@react-native-async-storage/async-storage'

class TodoContentUpdate extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            token: '',
            title: '',
            note: '',
            
            isLoading: false,

            thisID: this.props.route.params.id,
            thisTitle: this.props.route.params.title,
            thisNote: this.props.route.params.note,
        }

    }

    componentDidMount() {
        AsyncStorage.getItem('tokenn')
            .then(value => this.setState({
                token: value
            }))
    }

    componentDidUpdate(){
        
        const { title, note, thisTitle, thisNote } = this.state;

        if (title == '') {
            
            this.setState({
                title : thisTitle
            })
        } else if (note == '') {
            
            this.setState({
                note : thisNote
            })
        }
    }

    updateToDo(id) {

        this.setState({
            isLoading: true,
        })

        return fetch(`https://api-todoapp-pp.herokuapp.com/api/todo/${id}`, {
            method: 'PUT',
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

                console.log(resJson);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {

                this.setState({
                    isLoading: false
                })

                setTimeout(() => {

                    this.props.navigation.replace('Home')
                    ToastAndroid.showWithGravity(
                        'Update Berhasil',
                        ToastAndroid.SHORT,
                        ToastAndroid.BOTTOM
                    )
                }, 1000)
            })
    }


    render() {
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
                                const { thisID } = this.state;
                                this.updateToDo(thisID)
                            }}
                        >
                            {
                                this.state.isLoading ? <ActivityIndicator size="large" color="#FFF" /> : <Icon name="content-save" style={todo.iconButtonContent} />
                            }

                        </TouchableOpacity>

                        <View style={todo.accomodateTexInputTitle}>
                            <TextInput
                                defaultValue={this.state.thisTitle}
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
                                defaultValue={this.state.thisNote}
                                placeholder="Masukan Content"
                                placeholderTextColor="#A7A7A7"
                                multiline={true}
                                numberOfLines={10}
                                textAlignVertical="top"
                                style={todo.viewTextInputContent}
                                onChangeText={(note) => {

                                    this.setState({
                                        note : note
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

export default TodoContentUpdate
