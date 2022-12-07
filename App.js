import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './src/views/Login'
import Register from './src/views/Register'
import Home from './src/views/Home'
import Movie from './src/views/Movie'

export default function App() {
    const Stack = createNativeStackNavigator()

    return (
        <SafeAreaView style={styles.container}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{
                            animation: 'slide_from_right',
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="Register"
                        component={Register}
                        options={{
                            animation: 'slide_from_left',
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{
                            animation: 'slide_from_left',
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="Movie"
                        component={Movie}
                        options={{
                            animation: 'slide_from_left',
                            headerShown: false,
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        fontSize: 12,
        flex: 1,
        width: '100%',
    },
})
