import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native'
import { LoginStyle } from '../assets/style/LoginStyle'
import { CardStyle } from '../assets/style/Card'


const Accueil = ({navigation}) => {
    let tabUser = [3][5]
    tabUser[0][0] = Kyllian;
    tabUser[1][0] = Jolivet;
    tabUser[2][0] = Etudiant;
    
    tabUser[0][1] = Elyes;
    tabUser[1][1] = Moumit;
    tabUser[2][1] = Etudiant;

    return (

        <View style={LoginStyle.container}>
            <Text style={LoginStyle.text}>Accueil</Text>
        </View>

    )
}
export default Accueil

