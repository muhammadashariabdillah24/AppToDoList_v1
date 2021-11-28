import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Import Screen
import SplashScreen from '../../screen/SplashScreen/SplashScreen'
import Login from '../../screen/Login/Login'
import Register from '../../screen/Register/Register'
import Home from '../../screen/Home/Home'
import TodoContent from '../../screen/TodoContent/TodoContent'
import TodoContentUpdate from '../../screen/TodoContentUpdate/TodoContentUpdate'
import ShowTodoContent from '../../screen/ShowTodoContent/ShowTodoContent'

const Stack = createNativeStackNavigator()

class StackNavigator extends React.Component {
    render() {
        return (
            <Stack.Navigator
            screenOptions={{
                headerShown : false,
                statusBarAnimation : "slide",
                statusBarStyle : "light"
            }}
            >
                <Stack.Screen 
                    name="SplashScreen"
                    component={ SplashScreen }
                    options={{
                        animation : "fade"
                    }}
                />
                <Stack.Screen 
                    name="Login"
                    component={ Login }
                    options={{
                        animation : "fade",
                    }}
                />

                <Stack.Screen 
                    name="Register"
                    component={ Register }
                    options={{
                        animation : "fade",
                    }}
                />

                <Stack.Screen 
                    name="Home"
                    component={ Home }
                    options={{
                        animation : "fade",
                    }}
                />

                <Stack.Screen 
                    name="MyToDo"
                    component={ TodoContent }
                    options={{
                        animation : "slide_from_left",
                    }}
                />

                <Stack.Screen 
                    name="UpdateMyToDo"
                    component={ TodoContentUpdate }
                    options={{
                        animation : "slide_from_right"
                    }}
                />

                <Stack.Screen 
                    name="ShowMyToDo"
                    component={ ShowTodoContent }
                    options={{
                        animation : "flip"
                    }}
                />
            </Stack.Navigator>
        )
    }
}

export default StackNavigator
