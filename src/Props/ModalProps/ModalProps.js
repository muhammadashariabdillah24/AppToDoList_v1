import React from 'react'
import { 
    Text, 
    View,
    Modal,
    TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


class PropsModal extends React.Component {

    render() {
        return (
            <Modal
            animationType={this.props.AnimationType}
            transparent={true}
            visible={this.props.TheVisible}
            onRequestClose={this.props.CloseModal}
            statusBarTranslucent={this.props.StatusBar}
            >
                <View style={this.props.StyleModalContainer}>
                    <TouchableOpacity 
                    style={this.props.StyleButtonClose}
                    onPress={this.props.ButtonClose}
                    >
                        <Text style={this.props.StyleTextButtonClose}><Icon name={this.props.NameIconClose} style={this.props.StyleIconClose} /> {this.props.TextClose}</Text>
                    </TouchableOpacity>

                    <Text style={this.props.StyleModalTitleText}>{this.props.ModalTitleText}</Text>

                    <View style={this.props.StyleAccomodateModalButton}>
                        <TouchableOpacity 
                        style={this.props.StyleButtonNextChat}
                        onPress={this.props.ModalOnPressButtonNextChat}
                        >
                            <Text style={this.props.StyleTextButtonNextChat}><Icon name={this.props.NameIconChat} style={this.props.StyleIconChat} /> {this.props.TextButtonNextChat}</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity 
                        style={this.props.StyleButtonNextCall}
                        onPress={this.props.ModalOnPressButtonNextCall}
                        >
                            <Text style={this.props.StyleTextButtonNextCall}><Icon name={this.props.NameIconCall} style={this.props.StyleIconCall} /> {this.props.TextButtonNextCall}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        )
    }
}


export default PropsModal