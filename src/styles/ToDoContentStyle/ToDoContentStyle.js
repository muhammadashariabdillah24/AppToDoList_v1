import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const todo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    accomodateFrame: {
        backgroundColor: '#FFF',
        marginHorizontal: hp('2%'),
        flex : 1,
    },

    // Style For Icon
    viewIconDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: hp('2%')
    },
    buttonIconDetail: {
        backgroundColor: '#1e90ff',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: hp('1.5%'),
        borderRadius: 10
    },
    textDetail: {
        color: '#FFF',
        fontSize: hp('2%'),
        textShadowColor: '#1e90ff',
        textShadowOffset: {
            width: 1,
            height: 2
        },
        textShadowRadius: 5,
    },
    iconDetail: {
        fontSize: hp('3%'),
        color: '#FFF'
    },

    // Style For Content
    accomodateContent : {
        flexDirection : 'column',
        alignItems : 'stretch',
        marginTop : hp('3%'),
        position : 'relative'
    },
    accomodateTexInputTitle : {
        width : wp('100%'),
        maxWidth : '100%',
        borderBottomColor : '#A7A7A7',
        borderBottomWidth : 1
    },
    viewTextInputTitle :{
        textAlign : 'left',
        color : '#A7A7A7',
        fontSize : hp('2.5%')
    },
    accomodateTextInputContent : {
        width : '100%',
        height : hp('85%'),
        flexWrap : 'wrap',
    },
    viewTextInputContent : {
        maxWidth : '100%',
        maxHeight : '100%',
        color : '#A7A7A7',
        fontSize : hp('2.5%')
    },
    buttonSaveContent : {
        flexDirection : 'row',
        justifyContent : 'center',
        padding : hp('3%'),
        borderRadius : 50,
        position : 'absolute',
        right : wp('5%'),
        bottom : hp('10%'),
        backgroundColor : '#1e90ff'
    },
    iconButtonContent : {
        fontSize : hp('4%'),
        color : '#FFF'
    }
})


export default todo