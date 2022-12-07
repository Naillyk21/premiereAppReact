import { StyleSheet } from 'react-native'

export const LoginStyle = (StyleSheet.createstyle = StyleSheet.create({
    container: {
        height: '40vw',
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerCard: {
        display: 'flex',
        paddingTop:'25%',
        height: '40vw',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'blue',
        textAlign: 'center',
        fontSize: 24,
        width: 300,
    },
    inputContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginVertical: 20,
        width: '50%',
        marginHorizontal: 'auto',
    },
    inputEmail: {
        width: 400,
        height: 50,
        borderWidth: 2,
        borderColor: '#14213D',
        borderRadius: 9,
        textIndent: 10,
        borderBottomStartRadius: 0,
        borderBottomEndRadius: 0,
    },
    inputPassword: {
        width: 400,
        height: 50,
        borderWidth: 2,
        borderColor: '#14213D',
        borderRadius: 9,
        textIndent: 10,
        borderTopStartRadius: 0,
        borderTopEndRadius: 0,
    },
    loginButton: {
        width: 400,
        backgroundColor: '#4F46E5',
        height: 30,
        borderRadius: 9,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    loginButtonText: {
        color: 'white',
        textAlign: 'center',
    },
    registerButton: {
        width: 400,
        backgroundColor: '#fff',
        height: 30,
        borderRadius: 9,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
        borderWidth: 1,
        borderColor: '#4F46E5',
    },
    registerButtonText: {
        color: '#4F46E5',
    },
}))
