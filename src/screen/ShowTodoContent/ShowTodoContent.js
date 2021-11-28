import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import showtodo from '../../styles/ShowToDoContentStyle/ShowToDoContentStyle'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import AsyncStorage from '@react-native-async-storage/async-storage'

class ShowTodoContent extends Component {

    constructor(props) {
        super(props)

        this.state = {

            data: {},
            isLoading: false,
            token: ''
        }
    }

    _getToDoById(id) {

        this.setState({
            isLoading: true
        })

        return fetch(`https://api-todoapp-pp.herokuapp.com/api/todo/${id}`, {
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
                })
            })
            .catch(err => console.log(err))
            .finally(() => this.setState({
                isLoading: false
            }))
    }

    async componentDidMount() {

        await AsyncStorage.getItem('tokenn')
            .then(value => this.setState({
                token: value
            }))

        const { id } = this.props.route.params

        this._getToDoById(id)
    }

    render() {

        console.log(this.state.data);
        return (
            <View style={showtodo.container}>
                <View style={showtodo.accomodateFrame}>

                    <View style={showtodo.viewIconDetail}>
                        <TouchableOpacity
                            style={showtodo.buttonIconDetail}
                            onPress={() => {
                                this.props.navigation.replace('Home')
                            }}
                        >
                            <Icon
                                name="arrow-left"
                                style={showtodo.iconDetail}
                            />
                        </TouchableOpacity>

                        <Text style={showtodo.textDetail}>Todo Content</Text>

                        <TouchableOpacity
                            style={showtodo.buttonIconDetail}
                        >
                            <Icon
                                name="account-circle-outline"
                                style={showtodo.iconDetail}
                            />
                        </TouchableOpacity>
                    </View>

                    {
                        this.state.isLoading ? (
                            <ActivityIndicator size="large" color="#1e90ff" />
                        ) : (
                            <View style={showtodo.accContent}>
                                <Text style={showtodo.titleContent}>{this.state.data.title}</Text>
                                <Text style={showtodo.descContent}>{this.state.data.note}</Text>
                            </View>
                        )
                    }

                </View>
            </View>
        )
    }
}

export default ShowTodoContent
