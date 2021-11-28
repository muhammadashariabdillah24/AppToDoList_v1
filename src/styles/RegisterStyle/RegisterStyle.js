import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const regis = StyleSheet.create({

    container : {
        flex : 1,
        backgroundColor : '#FFF'
    },
    accomodateFrame : {
        height : hp('100%'),
        backgroundColor : '#FFF',
        marginHorizontal : 10,
        // alignItems : 'center'
    },

    // Style Icon
    accomodateIconAndTextIcon : {
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',
        marginVertical : hp('3%')
    },
    logoIcon : {
        fontSize : hp('13%'),
        color : '#1E90FF'
    },
    textIcon : {
        fontSize : hp('2%'),
        lineHeight : hp('3%'),
        color : '#dcdcdc'
    },

    // Style TextInput
    accomodateTextinput : {
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',
        marginTop : hp('10%'),
    },
    viewTextinput : {
        borderBottomColor : '#000',
        borderBottomWidth : 1,
        width : wp('80%'),
        maxWidth  : wp('80%'),
        marginVertical : hp('1.3'),
        flexDirection : 'row'
    },
    viewIconEye : {
        flexDirection : 'column',
        justifyContent : 'center'
    },
    iconEye : {
        fontSize : hp('3%'),
        color : '#1E90FF'
    },
    textInput : {
        width : wp('100%'),
        textAlign : 'left',
        color : '#A7A7A7'
    },

    // Style Button 
    accomodateButton : {
        alignItems : 'center',
    },
    viewButton : {
        width : wp('85%'),
        paddingVertical : hp('2.2%'),
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#1E90FF',
        marginVertical : hp('2.5%'),
        borderRadius : 15
    },
    iconButton : {
        fontSize : hp('2.5%'),
        color : '#FFF'
    },
    textButton : {
        color : '#FFF',
        fontSize : hp('2.5%'),
        fontWeight : 'bold'
    },

    // Style Text Register
    textRegister : {
        fontSize : hp('2%'),
        color : '#1E90FF',
        textAlign : 'center'
    }

})

export default regis