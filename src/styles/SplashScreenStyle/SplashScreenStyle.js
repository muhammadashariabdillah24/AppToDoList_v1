import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const splash = StyleSheet.create({
    container :{
        height : hp('100%'),
        backgroundColor : '#FFF',
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center'
    },
    styleForLottie : {
        width : 500,
        height : 500
    }

})

export default splash