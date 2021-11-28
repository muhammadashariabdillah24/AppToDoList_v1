// import { combineReducers } from "redux";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const stateToken = {

//     token : ''
// }


// const tokenReducers = (state = stateToken, action) => {

//     switch (action.type) {
//         case "SAVE_TOKEN":
//             console.log('Paytoken Dari Set Item : ' + action.payToken)
//             AsyncStorage.setItem('token', JSON.stringify({
//                 token : action.payToken
//             }))
//             // return {
//             //     token : action.payToken
//             // }
//         default:
//             return state;
//     }
// }

// const reducer = combineReducers({
//     tokenReducers
// })

// export default reducer;