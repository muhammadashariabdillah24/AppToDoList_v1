import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const showtodo = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor : '#FFF',
    },
    accomodateFrame : {
        marginHorizontal : hp('2%'),
        backgroundColor : '#FFF'
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


    // Style Text
    accContent : {
        // margin : hp('3%'),
        marginVertical : hp('5%'),
        flexDirection : 'column',
        alignContent : 'center'
    },
    titleContent : {
        color : '#696969',
        fontSize : hp('4%'),
        fontWeight : '600',
        marginVertical : hp('1%')
    },
    descContent : {
        color : '#696969',
        fontSize : hp('2%'),
        fontStyle : 'italic',
        marginVertical : hp('2%')
    }
})

export default showtodo