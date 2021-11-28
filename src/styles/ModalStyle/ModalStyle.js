import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const modal = StyleSheet.create({

    container: {
        height: hp('100%'),
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#FFF'
    },
    titleText: {
        fontSize: hp('2.5%'),
        color: '#A7A7A7'
    },
    accomodateButton: {
        marginVertical: hp('7%'),
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: wp('100%')
    },
    buttonClose: {
        backgroundColor: '#E76E6E',
        paddingHorizontal: hp('2%'),
        paddingVertical: hp('2%'),
        bottom: hp('8%'),
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 50
    },
    buttonDelete: {
        backgroundColor: '#dc143c',
        paddingHorizontal: hp('2%'),
        paddingVertical: hp('2%'),
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 50
    },
    // buttonEdit: {
    //     backgroundColor: '#6495ed',
    //     paddingHorizontal: 20,
    //     paddingVertical: 5,
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     borderRadius: 50
    // },
    buttonEdit: {
        backgroundColor: '#6495ed',
        paddingHorizontal: hp('2%'),
        paddingVertical: hp('2%'),
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 50
    },
    textButton: {
        fontSize: hp('2%'),
        color: '#FFF'
    },
    iconStyle: {
        fontSize: hp('2%'),
        color: '#FFF'
    }
})

export default modal