import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const home = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#E5E5E5'
    },
    accomodateFrame : {
        height : hp('100%'),
        backgroundColor : '#E5E5E5',
        marginHorizontal : hp('2%')
    },

    // Style For Icon
    viewIconDetail : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        marginTop : hp('2%'),
    },
    buttonIconDetail : {
        backgroundColor : '#1e90ff',
        flexDirection : 'row',
        justifyContent : 'center',
        padding : hp('1.5%'),
        borderRadius : 10
    },
    textDetail : {
        color : '#FFF',
        fontSize : hp('2%'),
        textShadowColor : '#1e90ff',
        textShadowOffset : {
            width : 1,
            height : 2
        },
        textShadowRadius : 5,
    },
    iconDetail : {
        fontSize : hp('3%'),
        color : '#FFF'
    },

    // Style For Home
    accomodateBody : {
        marginVertical : hp('2%'),
        flexDirection : 'column',
        height : hp('90%')
    },
    accomodateToDo : {
        marginHorizontal : hp('1%'),
        position : 'relative'
    },
    buttonAddContent : {
        backgroundColor : '#FFF',
        borderRadius : 200,
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        position : 'absolute',
        padding : hp('2%'),
        right : wp('5%'),
        bottom : hp('10%'),
        zIndex : 1
    },
    iconButtonAddContent : {
        fontSize : 30,
        color : '#1e90ff'
    },
    viewBoxToDo : {
        borderRadius : 15,
        borderColor : '#e6e6fa',
        backgroundColor : '#1e90ff',
        flexDirection : 'row',
        justifyContent : 'space-around',
        alignItems : 'center',
        paddingVertical : hp('3%'),
        marginVertical : hp('1%'),
        width : '100%'
    },
    viewTextToDo : {
        flexDirection : 'column',
        justifyContent : 'flex-start',
    },
    textBigToDo : {
        fontSize : hp('2.7%'),
        color : '#f5fffa',
        fontWeight : '900'
    },
    textSmallToDo : {
        fontSize : hp('2%'),
        color : '#FFF',
        fontStyle : 'italic'
    },
    viewDatetime : {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems : 'center',
        width : wp('20%')
    },
    textDateTime : {
        color : '#FFF',
        fontSize : hp('2%')
    }

})

export default home